Feature: Scaffolder

  Scenario: Scaffold in a Gitea repository
    Given the repository is hosted on Gitea
    When the project is scaffolded
    Then the workflows directory exists

  Scenario: Scaffold outside of a Gitea repository
    Given the repository is not hosted on Gitea
    When the project is scaffolded
    Then the workflows directory does not exist
