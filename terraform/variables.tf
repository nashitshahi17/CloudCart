
variable "subscription_id" {
  description = "Azure subscription ID"
  type        = string
  sensitive   = true
}

variable "location" {
  description = "Azure region for CloudCart infrastructure"
  type        = string
  default     = "centralindia"
}

variable "project_name" {
  description = "Prefix used to name CloudCart resources"
  type        = string
  default     = "cloudcart"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "dev"
}

variable "registry_name" {
  description = "Globally unique Azure Container Registry name"
  type        = string

  validation {
    condition     = can(regex("^[a-zA-Z0-9]{5,50}$", var.registry_name))
    error_message = "Registry name must be 5-50 alphanumeric characters."
  }
}


variable "aks_node_count" {
  description = "Number of AKS worker nodes"
  type        = number
  default     = 1

  validation {
    condition     = var.aks_node_count >= 1 && var.aks_node_count <= 3
    error_message = "For this learning environment, choose between 1 and 3 nodes."
  }
}

variable "aks_vm_size" {
  description = "AKS worker node VM size"
  type        = string
  default     = "Standard_D4as_v4"
}
