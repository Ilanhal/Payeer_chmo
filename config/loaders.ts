import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev, } = options
  const tsLoader = {
    test: /\.ts$/,
    use: [
      {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/, ], },
      },
    ],
    exclude: /node_modules/,
  }
  const txtLoader = {
    test: /\.txt$/,
    use: 'raw-loader',
    exclude: /node_modules/,
  }
  const vueLoader = {
    test: /\.vue$/,
    loader: 'vue-loader',
  }
  const cssLoaders = {
    // test: /\.s[ac]ss$/i,/\.scss$/
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // "vue-style-loader",
      'css-loader',
      'sass-loader',
      // "postcss-loader",
    ],
  }
  const svgLoader = {
    test: /\.svg$/,
    loader: 'svg-inline-loader',
  }
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const babelLoader = {
    test: /\.(ts|js)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', ],
      },
    },
  }

  return [
    babelLoader,
    tsLoader,
    txtLoader,
    cssLoaders,
    vueLoader,
    svgLoader,
    fileLoader,
  ]
}
