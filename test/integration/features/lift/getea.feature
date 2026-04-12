Feature: Gitea

  Scenario: Remove `.gitkeep` file from the `.gitea/` directory
    Given the repository is hosted on Gitea
    And the `.gitkeep` file exists in the `.gitea` directory
    And the repository has Gitea workflows
    When the project is lifted
    Then the `.gitkeep` file has been removed from the `.gitea` directory
