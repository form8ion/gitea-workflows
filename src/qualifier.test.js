import {test as projectIsHostedOnGitea} from '@form8ion/gitea';

import {describe, vi, it, expect} from 'vitest';
import {when} from 'vitest-when';
import any from '@travi/any';

import giteaWorkflowsAreApplicable from './qualifier.js';

vi.mock('@form8ion/gitea');

describe('qualifier', () => {
  const projectRoot = any.string();

  it('should return `true` when the repository is hosted on gitea', async () => {
    when(projectIsHostedOnGitea).calledWith({projectRoot}).thenResolve(true);

    expect(await giteaWorkflowsAreApplicable({projectRoot})).toBe(true);
  });

  it('should return `false` when the repository is not hosted on gitea', async () => {
    when(projectIsHostedOnGitea).calledWith({projectRoot}).thenResolve(false);

    expect(await giteaWorkflowsAreApplicable({projectRoot})).toBe(false);
  });
});
