import {promises as fs} from 'node:fs';

import {describe, it, vi, expect} from 'vitest';
import any from '@travi/any';

import liftWorkflows from './lifter.js';

vi.mock('node:fs');

describe('gitea workflows lifter', () => {
  it('should lift workflow details', async () => {
    const projectRoot = any.string();

    expect(await liftWorkflows({projectRoot})).toEqual({});

    expect(fs.rm).toHaveBeenCalledWith(`${projectRoot}/.gitea/.gitkeep`, {force: true});
  });
});
