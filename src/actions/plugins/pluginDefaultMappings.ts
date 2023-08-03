import { IConfiguration, IKeyRemapping } from '../../configuration/iconfiguration';

export class PluginDefaultMappings {
  // plugin authers may add entries here
  private static defaultMappings: Array<{
    mode: string;
    configSwitch: string;
    mapping: IKeyRemapping;
  }> = [];

  public static getPluginDefaultMappings(mode: string, config: IConfiguration): IKeyRemapping[] {
    return this.defaultMappings
      .filter((m) => m.mode === mode && config[m.configSwitch])
      .map((m) => m.mapping);
  }
}
