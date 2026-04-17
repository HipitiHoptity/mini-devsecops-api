package main

deny[msg] {
  input.kind == "Deployment"
  not input.spec.template.spec.securityContext.runAsNonRoot
  msg = "Le deploiement Kubernetes doit definir securityContext.runAsNonRoot=true"
}
