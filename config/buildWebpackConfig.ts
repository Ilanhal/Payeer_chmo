import type webpack from 'webpack'
import { buildDevServer } from './devserver'
import { buildLoaders } from './loaders'
import { buildPlugins } from './plugins'
import { biuldResolve } from './resolvers'
import { type BuildOptions } from './types/config'

export function buildWebpacklugins (
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, performance, } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: biuldResolve(options),
    plugins: buildPlugins(options),
    devtool: 'inline-source-map',
    devServer: buildDevServer(options),
    performance,
  }
}
