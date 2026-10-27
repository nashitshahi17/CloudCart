
output "vnet_id" {
  description = "ID of the CloudCart virtual network"
  value       = azurerm_virtual_network.cloudcart.id
}

output "vnet_name" {
  description = "Name of the CloudCart virtual network"
  value       = azurerm_virtual_network.cloudcart.name
}

output "aks_subnet_id" {
  description = "ID of the subnet reserved for AKS"
  value       = azurerm_subnet.aks.id
}
