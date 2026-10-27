
variable "resource_group_name" {
  description = "Resource group containing AKS"
  type        = string
}

variable "location" {
  description = "Azure region"
  type        = string
}

variable "project_name" {
  description = "Project name prefix"
  type        = string
}

variable "environment" {
  description = "Deployment environment"
  type        = string
}

variable "subnet_id" {
  description = "Subnet ID for AKS nodes"
  type        = string
}

variable "node_count" {
  description = "Initial number of AKS worker nodes"
  type        = number
  default     = 1
}

variable "node_vm_size" {
  description = "VM size for AKS worker nodes"
  type        = string
  default     = "Standard_D4as_v4"
}

variable "acr_id" {
  description = "Azure Container Registry resource ID"
  type        = string
}
