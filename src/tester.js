import {directoryExists} from '@form8ion/core';

export default function test({projectRoot}) {
  return directoryExists(`${projectRoot}/.gitea/workflows`);
}
