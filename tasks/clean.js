import del from 'del';

import * as config from '../config';

export default () => del(config.basePath.dist);
