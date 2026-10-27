
output "acr_id" {
  description = "Resource ID of the container registry"
  value       = azurerm_container_registry.cloudcart.id
}

output "acr_name" {
  description = "Name of the container registry"
  value       = azurerm_container_registry.cloudcart.name
}

output "acr_login_server" {
  description = "Registry endpoint for Docker images"
  value       = azurerm_container_registry.cloudcart.login_server
}
