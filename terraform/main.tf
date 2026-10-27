
resource "azurerm_resource_group" "cloudcart" {
  name     = "${var.project_name}-${var.environment}-rg"
  location = var.location

  tags = {
    project     = "CloudCart"
    environment = var.environment
    managed_by  = "Terraform"
  }
}


module "networking" {
  source = "./modules/networking"

  resource_group_name = azurerm_resource_group.cloudcart.name
  location            = azurerm_resource_group.cloudcart.location
  project_name        = var.project_name
  environment         = var.environment

  vnet_address_space  = ["10.0.0.0/16"]
  aks_subnet_prefixes = ["10.0.1.0/24"]
}



module "acr" {
  source = "./modules/acr"

  resource_group_name = azurerm_resource_group.cloudcart.name
  location            = azurerm_resource_group.cloudcart.location
  project_name        = var.project_name
  environment         = var.environment

  registry_name = var.registry_name
}


module "aks" {
  source = "./modules/aks"

  resource_group_name = azurerm_resource_group.cloudcart.name
  location            = azurerm_resource_group.cloudcart.location
  project_name        = var.project_name
  environment         = var.environment

  subnet_id    = module.networking.aks_subnet_id
  acr_id       = module.acr.acr_id
  node_count   = var.aks_node_count
  node_vm_size = var.aks_vm_size
}
