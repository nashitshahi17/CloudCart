
output "resource_group_name" {
  description = "Name of the CloudCart resource group"
  value       = azurerm_resource_group.cloudcart.name
}

output "resource_group_location" {
  description = "Azure region of the resource group"
  value       = azurerm_resource_group.cloudcart.location
}


output "acr_name" {
  description = "Azure Container Registry name"
  value       = module.acr.acr_name
}

output "acr_login_server" {
  description = "Azure Container Registry endpoint"
  value       = module.acr.acr_login_server
}

output "acr_id" {
  description = "Azure Container Registry resource ID"
  value       = module.acr.acr_id
}


output "aks_cluster_name" {
  description = "Name of the CloudCart AKS cluster"
  value       = module.aks.aks_cluster_name
}

output "aks_cluster_id" {
  description = "Resource ID of the CloudCart AKS cluster"
  value       = module.aks.aks_cluster_id
}

