# 04 – Group Policy Management (GPO)

## Objectif

Centraliser la gestion des paramètres utilisateurs et automatiser l'accès aux ressources réseau grâce aux stratégies de groupe Active Directory.

## 1. GPO de restrictions

Trois stratégies ont été créées :

- GPO-IT-RESTRICTIONS
- GPO-RH-RESTRICTIONS
- GPO-FINANCE-RESTRICTIONS

Chaque stratégie est liée à l'OU correspondante et configure la restriction d'accès au Panneau de configuration.

## 2. Mappage des lecteurs réseau

Des stratégies Drive Maps ont été configurées :

| Département | Partage réseau | Lecteur |
|---|---|---|
| IT | \\\\DC01\\IT | I: |
| RH | \\\\DC01\\RH | R: |
| FINANCE | \\\\DC01\\FINANCE | F: |

## 3. Validation

Les stratégies ont été testées avec les comptes utilisateurs correspondants sur CLIENT01.

Les vérifications comprennent :
- Application des stratégies avec `gpupdate /force`.
- Vérification avec `gpresult /r`.
- Contrôle de l'apparition des lecteurs réseau dans l'Explorateur Windows.

## Résultat

Mise en place d'une gestion centralisée des restrictions utilisateurs et de l'accès aux ressources partagées.