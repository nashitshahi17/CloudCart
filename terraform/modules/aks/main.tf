
resource "azurerm_user_assigned_identity" "aks" {
  name                = "${var.project_name}-${var.environment}-aks-identity"
  location            = var.location
  resource_group_name = var.resource_group_name

  tags = {
    project     = "CloudCart"
    environment = var.environment
    managed_by  = "Terraform"
  }
}

resource "azurerm_role_assignment" "subnet_network_contributor" {
  scope                = var.subnet_id
  role_definition_name = "Network Contributor"
  principal_id         = azurerm_user_assigned_identity.aks.principal_id

  principal_type = "ServicePrincipal"
}

resource "azurerm_kubernetes_cluster" "cloudcart" {
  name                = "${var.project_name}-${var.environment}-aks"
  location            = var.location
  resource_group_name = var.resource_group_name
  dns_prefix          = "${var.project_name}-${var.environment}"

  identity {
    type         = "UserAssigned"
    identity_ids = [azurerm_user_assigned_identity.aks.id]
  }

  default_node_pool {
    name           = "system"
    node_count     = var.node_count
    vm_size        = var.node_vm_size
    vnet_subnet_id = var.subnet_id
    zones          = ["1", "3"]
  }

  network_profile {
    network_plugin = "azure"
    service_cidr   = "10.1.0.0/16"
    dns_service_ip = "10.1.0.10"
  }

  tags = {
    project     = "CloudCart"
    environment = var.environment
    managed_by  = "Terraform"
  }

  depends_on = [
    azurerm_role_assignment.subnet_network_contributor
  ]
}

resource "azurerm_role_assignment" "acr_pull" {
  scope                = var.acr_id
  role_definition_name = "AcrPull"
  principal_id         = azurerm_kubernetes_cluster.cloudcart.kubelet_identity[0].object_id
  principal_type       = "ServicePrincipal"
}
