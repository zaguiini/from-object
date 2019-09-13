type Object<T> = {
  [key: string]: T;
};

export type FromObject = <T extends any>(
  object: Object<T>,
  identifier?: string
) => T[];

export const fromObject: FromObject = (object, identifier) =>
  Object.keys(object).map(key => {
    if (identifier) {
      object[key][identifier] = key;
    }

    return object[key];
  });
