
variable "resource_group_name" {
  description = "Resource group containing the registry"
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

variable "registry_name" {
  description = "Globally unique Azure Container Registry name"
  type        = string

  validation {
    condition     = can(regex("^[a-zA-Z0-9]{5,50}$", var.registry_name))
    error_message = "The registry name must contain 5-50 alphanumeric characters only."
  }
}
