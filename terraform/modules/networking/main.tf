
resource "azurerm_virtual_network" "cloudcart" {
  name                = "${var.project_name}-${var.environment}-vnet"
  location            = var.location
  resource_group_name = var.resource_group_name
  address_space       = var.vnet_address_space

  tags = {
    project     = "CloudCart"
    environment = var.environment
    managed_by  = "Terraform"
  }
}

resource "azurerm_subnet" "aks" {
  name                 = "${var.project_name}-${var.environment}-aks-subnet"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.cloudcart.name
  address_prefixes     = var.aks_subnet_prefixes
}
