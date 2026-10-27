
resource "azurerm_container_registry" "cloudcart" {
  name                = var.registry_name
  resource_group_name = var.resource_group_name
  location            = var.location
  sku                 = "Basic"
  admin_enabled       = false

  tags = {
    project     = "CloudCart"
    environment = var.environment
    managed_by  = "Terraform"
  }
}
