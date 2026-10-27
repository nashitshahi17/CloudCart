
output "aks_cluster_name" {
  description = "Name of the AKS cluster"
  value       = azurerm_kubernetes_cluster.cloudcart.name
}

output "aks_cluster_id" {
  description = "Resource ID of the AKS cluster"
  value       = azurerm_kubernetes_cluster.cloudcart.id
}

output "aks_identity_client_id" {
  description = "Client ID of the AKS control-plane identity"
  value       = azurerm_user_assigned_identity.aks.client_id
}

output "aks_kubelet_identity_object_id" {
  description = "Object ID of the AKS kubelet identity"
  value       = azurerm_kubernetes_cluster.cloudcart.kubelet_identity[0].object_id
}
