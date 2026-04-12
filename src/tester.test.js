import {directoryExists} from '@form8ion/core';

import {describe, vi, it, expect} from 'vitest';
import {when} from 'vitest-when';
import any from '@travi/any';

import projectUsesGiteaWorkflows from './tester.js';

vi.mock('@form8ion/core');

describe('predicate', () => {
  const projectRoot = any.string();

  it('should return `true` when the workflows directory exists', async () => {
    when(directoryExists).calledWith(`${projectRoot}/.gitea/workflows`).thenResolve(true);

    expect(await projectUsesGiteaWorkflows({projectRoot})).toBe(true);
  });

  it('should return `false` when the workflows directory does not exist', async () => {
    when(directoryExists).calledWith(`${projectRoot}/.gitea/workflows`).thenResolve(false);

    expect(await projectUsesGiteaWorkflows({projectRoot})).toBe(false);
  });
});
