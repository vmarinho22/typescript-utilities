type User = Awaited<Promise<{}> | Promise<string> | string>;
// Type User = string | {}

type IsActive = Awaited<Promise<Promise<boolean>> | Promise<boolean>>;
// Type IsActive = boolean

type IsEnabled = Awaited<boolean | Promise<Promise<boolean>>>;
// Type IsEnabled = boolean

export {};