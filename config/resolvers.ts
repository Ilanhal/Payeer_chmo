import { type BuildOptions } from './types/config'
import { type ResolveOptions } from 'webpack'

export function biuldResolve (options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.ts', '.js', ],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules', ],
    alias: {},
    mainFiles: ['index', ],
  }
}
