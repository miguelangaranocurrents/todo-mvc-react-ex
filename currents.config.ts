import { CurrentsConfig } from '@currents/playwright';

const config: CurrentsConfig = {
  recordKey: process.env.CURRENTS_RECORD_KEY!,
  projectId: 'HPitKM',
};

export default config;
