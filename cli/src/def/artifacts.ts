// This file is generated by codegen/index.ts
// Do not edit this file manually
import { Command, Option } from 'clipanion'

export abstract class BaseArtifactsCommand extends Command {
  static paths = [['artifacts']]

  static usage = Command.Usage({
    description:
      'Copy artifacts from Github Actions into npm packages and ready to publish',
  })

  cwd = Option.String('--cwd', process.cwd(), {
    description:
      'The working directory of where napi command will be executed in, all other paths options are relative to this path',
  })

  configPath?: string = Option.String('--config-path,-c', {
    description: 'Path to `napi` config json file',
  })

  packageJsonPath = Option.String('--package-json-path', 'package.json', {
    description: 'Path to `package.json`',
  })

  outputDir = Option.String('--output-dir,-o,-d', './artifacts', {
    description:
      'Path to the folder where all built `.node` files put, same as `--output-dir` of build command',
  })

  npmDir = Option.String('--npm-dir', 'npm', {
    description: 'Path to the folder where the npm packages put',
  })

  getOptions() {
    return {
      cwd: this.cwd,
      configPath: this.configPath,
      packageJsonPath: this.packageJsonPath,
      outputDir: this.outputDir,
      npmDir: this.npmDir,
    }
  }
}

/**
 * Copy artifacts from Github Actions into npm packages and ready to publish
 */
export interface ArtifactsOptions {
  /**
   * The working directory of where napi command will be executed in, all other paths options are relative to this path
   *
   * @default process.cwd()
   */
  cwd?: string
  /**
   * Path to `napi` config json file
   */
  configPath?: string
  /**
   * Path to `package.json`
   *
   * @default 'package.json'
   */
  packageJsonPath?: string
  /**
   * Path to the folder where all built `.node` files put, same as `--output-dir` of build command
   *
   * @default './artifacts'
   */
  outputDir?: string
  /**
   * Path to the folder where the npm packages put
   *
   * @default 'npm'
   */
  npmDir?: string
}

export function applyDefaultArtifactsOptions(options: ArtifactsOptions) {
  return {
    cwd: process.cwd(),
    packageJsonPath: 'package.json',
    outputDir: './artifacts',
    npmDir: 'npm',
    ...options,
  }
}
