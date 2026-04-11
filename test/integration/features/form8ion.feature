Feature: gitea-workflows as form8ion plugin

  Scenario: plugin conventions
    Given the repository is hosted on Gitea
    When the gitea-workflows plugin is compared to form8ion plugin conventions
    Then the public interface is compatible with the plugin schema
    And the output produced by the scaffolder is detectable by the predicate
