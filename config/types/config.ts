export type BuildMode = 'production' | 'development'

export interface BuildPath {
  entry: string
  build: string
  html: string
  src: string
  favicon?: string
}

export interface BuildOptimization {
  splitChunks: BuildSplitChunks
}

export interface BuildSplitChunks {
  minSize: number
  maxSize: number
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPath
  isDev: boolean
  port: number
  // performance: BuildPerfomance,
  performance: any
  optimization: BuildOptimization
  devtool: string | boolean
}

export interface BuildEnv {
  mode: BuildMode
  port: number
}
