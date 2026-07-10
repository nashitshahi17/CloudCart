{{/*
Expand the chart name.
*/}}

{{- define "cloudcart.name" -}}
{{- .Chart.Name -}}
{{- end }}

{{/*
Create a fullname.
*/}}

{{- define "cloudcart.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name -}}
{{- end }}

{{/*
Common labels
*/}}

{{- define "cloudcart.labels" -}}
app.kubernetes.io/name: {{ include "cloudcart.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion }}
helm.sh/chart: {{ .Chart.Name }}-{{ .Chart.Version }}
{{- end }}