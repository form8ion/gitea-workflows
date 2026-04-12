import {promises as fs} from 'node:fs';
import {directoryExists} from '@form8ion/core';

import {describe, vi, it, expect} from 'vitest';
import {when} from 'vitest-when';
import any from '@travi/any';

import scaffoldWorkflows from './scaffolder.js';

vi.mock('node:fs');
vi.mock('@form8ion/core');

describe('gitea workflows scaffolder', () => {
  const projectRoot = any.string();

  it('should create the workflows directory', async () => {
    when(directoryExists).calledWith(`${projectRoot}/.gitea`).thenResolve(true);

    expect(await scaffoldWorkflows({projectRoot})).toEqual({});

    expect(fs.mkdir).toHaveBeenCalledWith(`${projectRoot}/.gitea/workflows`);
    expect(fs.writeFile).toHaveBeenCalledWith(`${projectRoot}/.gitea/workflows/.gitkeep`, '');
  });

  it('should not create the workflows directory when the repository is not hosted on gitea', async () => {
    when(directoryExists).calledWith(`${projectRoot}/.gitea`).thenResolve(false);

    expect(await scaffoldWorkflows({projectRoot})).toEqual({});

    expect(fs.mkdir).not.toHaveBeenCalled();
  });
});
