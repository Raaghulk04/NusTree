
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model MajorTemplate
 * 
 */
export type MajorTemplate = $Result.DefaultSelection<Prisma.$MajorTemplatePayload>
/**
 * Model UserPlanModule
 * 
 */
export type UserPlanModule = $Result.DefaultSelection<Prisma.$UserPlanModulePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Modules
 * const modules = await prisma.module.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Modules
   * const modules = await prisma.module.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.majorTemplate`: Exposes CRUD operations for the **MajorTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MajorTemplates
    * const majorTemplates = await prisma.majorTemplate.findMany()
    * ```
    */
  get majorTemplate(): Prisma.MajorTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPlanModule`: Exposes CRUD operations for the **UserPlanModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPlanModules
    * const userPlanModules = await prisma.userPlanModule.findMany()
    * ```
    */
  get userPlanModule(): Prisma.UserPlanModuleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Module: 'Module',
    MajorTemplate: 'MajorTemplate',
    UserPlanModule: 'UserPlanModule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "module" | "majorTemplate" | "userPlanModule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      MajorTemplate: {
        payload: Prisma.$MajorTemplatePayload<ExtArgs>
        fields: Prisma.MajorTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MajorTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MajorTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorTemplatePayload>
          }
          findFirst: {
            args: Prisma.MajorTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MajorTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorTemplatePayload>
          }
          findMany: {
            args: Prisma.MajorTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorTemplatePayload>[]
          }
          create: {
            args: Prisma.MajorTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorTemplatePayload>
          }
          createMany: {
            args: Prisma.MajorTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MajorTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorTemplatePayload>[]
          }
          delete: {
            args: Prisma.MajorTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorTemplatePayload>
          }
          update: {
            args: Prisma.MajorTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorTemplatePayload>
          }
          deleteMany: {
            args: Prisma.MajorTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MajorTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MajorTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorTemplatePayload>[]
          }
          upsert: {
            args: Prisma.MajorTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorTemplatePayload>
          }
          aggregate: {
            args: Prisma.MajorTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMajorTemplate>
          }
          groupBy: {
            args: Prisma.MajorTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<MajorTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MajorTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<MajorTemplateCountAggregateOutputType> | number
          }
        }
      }
      UserPlanModule: {
        payload: Prisma.$UserPlanModulePayload<ExtArgs>
        fields: Prisma.UserPlanModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPlanModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlanModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPlanModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlanModulePayload>
          }
          findFirst: {
            args: Prisma.UserPlanModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlanModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPlanModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlanModulePayload>
          }
          findMany: {
            args: Prisma.UserPlanModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlanModulePayload>[]
          }
          create: {
            args: Prisma.UserPlanModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlanModulePayload>
          }
          createMany: {
            args: Prisma.UserPlanModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPlanModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlanModulePayload>[]
          }
          delete: {
            args: Prisma.UserPlanModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlanModulePayload>
          }
          update: {
            args: Prisma.UserPlanModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlanModulePayload>
          }
          deleteMany: {
            args: Prisma.UserPlanModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPlanModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPlanModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlanModulePayload>[]
          }
          upsert: {
            args: Prisma.UserPlanModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlanModulePayload>
          }
          aggregate: {
            args: Prisma.UserPlanModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPlanModule>
          }
          groupBy: {
            args: Prisma.UserPlanModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPlanModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPlanModuleCountArgs<ExtArgs>
            result: $Utils.Optional<UserPlanModuleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    module?: ModuleOmit
    majorTemplate?: MajorTemplateOmit
    userPlanModule?: UserPlanModuleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    userPlanModules: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPlanModules?: boolean | ModuleCountOutputTypeCountUserPlanModulesArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountUserPlanModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlanModuleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    workload: number | null
  }

  export type ModuleSumAggregateOutputType = {
    workload: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    department: string | null
    workload: number | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    department: string | null
    workload: number | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    title: number
    description: number
    department: number
    workload: number
    prereqTree: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    workload?: true
  }

  export type ModuleSumAggregateInputType = {
    workload?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    department?: true
    workload?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    department?: true
    workload?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    department?: true
    workload?: true
    prereqTree?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: string
    title: string
    description: string | null
    department: string | null
    workload: number | null
    prereqTree: JsonValue | null
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    department?: boolean
    workload?: boolean
    prereqTree?: boolean
    userPlanModules?: boolean | Module$userPlanModulesArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    department?: boolean
    workload?: boolean
    prereqTree?: boolean
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    department?: boolean
    workload?: boolean
    prereqTree?: boolean
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    department?: boolean
    workload?: boolean
    prereqTree?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "department" | "workload" | "prereqTree", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPlanModules?: boolean | Module$userPlanModulesArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      userPlanModules: Prisma.$UserPlanModulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      department: string | null
      workload: number | null
      prereqTree: Prisma.JsonValue | null
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userPlanModules<T extends Module$userPlanModulesArgs<ExtArgs> = {}>(args?: Subset<T, Module$userPlanModulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'String'>
    readonly title: FieldRef<"Module", 'String'>
    readonly description: FieldRef<"Module", 'String'>
    readonly department: FieldRef<"Module", 'String'>
    readonly workload: FieldRef<"Module", 'Float'>
    readonly prereqTree: FieldRef<"Module", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.userPlanModules
   */
  export type Module$userPlanModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleInclude<ExtArgs> | null
    where?: UserPlanModuleWhereInput
    orderBy?: UserPlanModuleOrderByWithRelationInput | UserPlanModuleOrderByWithRelationInput[]
    cursor?: UserPlanModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPlanModuleScalarFieldEnum | UserPlanModuleScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model MajorTemplate
   */

  export type AggregateMajorTemplate = {
    _count: MajorTemplateCountAggregateOutputType | null
    _min: MajorTemplateMinAggregateOutputType | null
    _max: MajorTemplateMaxAggregateOutputType | null
  }

  export type MajorTemplateMinAggregateOutputType = {
    id: string | null
    majorCode: string | null
    majorName: string | null
  }

  export type MajorTemplateMaxAggregateOutputType = {
    id: string | null
    majorCode: string | null
    majorName: string | null
  }

  export type MajorTemplateCountAggregateOutputType = {
    id: number
    majorCode: number
    majorName: number
    _all: number
  }


  export type MajorTemplateMinAggregateInputType = {
    id?: true
    majorCode?: true
    majorName?: true
  }

  export type MajorTemplateMaxAggregateInputType = {
    id?: true
    majorCode?: true
    majorName?: true
  }

  export type MajorTemplateCountAggregateInputType = {
    id?: true
    majorCode?: true
    majorName?: true
    _all?: true
  }

  export type MajorTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MajorTemplate to aggregate.
     */
    where?: MajorTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorTemplates to fetch.
     */
    orderBy?: MajorTemplateOrderByWithRelationInput | MajorTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MajorTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MajorTemplates
    **/
    _count?: true | MajorTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MajorTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MajorTemplateMaxAggregateInputType
  }

  export type GetMajorTemplateAggregateType<T extends MajorTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateMajorTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMajorTemplate[P]>
      : GetScalarType<T[P], AggregateMajorTemplate[P]>
  }




  export type MajorTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorTemplateWhereInput
    orderBy?: MajorTemplateOrderByWithAggregationInput | MajorTemplateOrderByWithAggregationInput[]
    by: MajorTemplateScalarFieldEnum[] | MajorTemplateScalarFieldEnum
    having?: MajorTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MajorTemplateCountAggregateInputType | true
    _min?: MajorTemplateMinAggregateInputType
    _max?: MajorTemplateMaxAggregateInputType
  }

  export type MajorTemplateGroupByOutputType = {
    id: string
    majorCode: string
    majorName: string
    _count: MajorTemplateCountAggregateOutputType | null
    _min: MajorTemplateMinAggregateOutputType | null
    _max: MajorTemplateMaxAggregateOutputType | null
  }

  type GetMajorTemplateGroupByPayload<T extends MajorTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MajorTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MajorTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MajorTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], MajorTemplateGroupByOutputType[P]>
        }
      >
    >


  export type MajorTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    majorCode?: boolean
    majorName?: boolean
  }, ExtArgs["result"]["majorTemplate"]>

  export type MajorTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    majorCode?: boolean
    majorName?: boolean
  }, ExtArgs["result"]["majorTemplate"]>

  export type MajorTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    majorCode?: boolean
    majorName?: boolean
  }, ExtArgs["result"]["majorTemplate"]>

  export type MajorTemplateSelectScalar = {
    id?: boolean
    majorCode?: boolean
    majorName?: boolean
  }

  export type MajorTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "majorCode" | "majorName", ExtArgs["result"]["majorTemplate"]>

  export type $MajorTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MajorTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      majorCode: string
      majorName: string
    }, ExtArgs["result"]["majorTemplate"]>
    composites: {}
  }

  type MajorTemplateGetPayload<S extends boolean | null | undefined | MajorTemplateDefaultArgs> = $Result.GetResult<Prisma.$MajorTemplatePayload, S>

  type MajorTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MajorTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MajorTemplateCountAggregateInputType | true
    }

  export interface MajorTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MajorTemplate'], meta: { name: 'MajorTemplate' } }
    /**
     * Find zero or one MajorTemplate that matches the filter.
     * @param {MajorTemplateFindUniqueArgs} args - Arguments to find a MajorTemplate
     * @example
     * // Get one MajorTemplate
     * const majorTemplate = await prisma.majorTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MajorTemplateFindUniqueArgs>(args: SelectSubset<T, MajorTemplateFindUniqueArgs<ExtArgs>>): Prisma__MajorTemplateClient<$Result.GetResult<Prisma.$MajorTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MajorTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MajorTemplateFindUniqueOrThrowArgs} args - Arguments to find a MajorTemplate
     * @example
     * // Get one MajorTemplate
     * const majorTemplate = await prisma.majorTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MajorTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, MajorTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MajorTemplateClient<$Result.GetResult<Prisma.$MajorTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MajorTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorTemplateFindFirstArgs} args - Arguments to find a MajorTemplate
     * @example
     * // Get one MajorTemplate
     * const majorTemplate = await prisma.majorTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MajorTemplateFindFirstArgs>(args?: SelectSubset<T, MajorTemplateFindFirstArgs<ExtArgs>>): Prisma__MajorTemplateClient<$Result.GetResult<Prisma.$MajorTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MajorTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorTemplateFindFirstOrThrowArgs} args - Arguments to find a MajorTemplate
     * @example
     * // Get one MajorTemplate
     * const majorTemplate = await prisma.majorTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MajorTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, MajorTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__MajorTemplateClient<$Result.GetResult<Prisma.$MajorTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MajorTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MajorTemplates
     * const majorTemplates = await prisma.majorTemplate.findMany()
     * 
     * // Get first 10 MajorTemplates
     * const majorTemplates = await prisma.majorTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const majorTemplateWithIdOnly = await prisma.majorTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MajorTemplateFindManyArgs>(args?: SelectSubset<T, MajorTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MajorTemplate.
     * @param {MajorTemplateCreateArgs} args - Arguments to create a MajorTemplate.
     * @example
     * // Create one MajorTemplate
     * const MajorTemplate = await prisma.majorTemplate.create({
     *   data: {
     *     // ... data to create a MajorTemplate
     *   }
     * })
     * 
     */
    create<T extends MajorTemplateCreateArgs>(args: SelectSubset<T, MajorTemplateCreateArgs<ExtArgs>>): Prisma__MajorTemplateClient<$Result.GetResult<Prisma.$MajorTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MajorTemplates.
     * @param {MajorTemplateCreateManyArgs} args - Arguments to create many MajorTemplates.
     * @example
     * // Create many MajorTemplates
     * const majorTemplate = await prisma.majorTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MajorTemplateCreateManyArgs>(args?: SelectSubset<T, MajorTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MajorTemplates and returns the data saved in the database.
     * @param {MajorTemplateCreateManyAndReturnArgs} args - Arguments to create many MajorTemplates.
     * @example
     * // Create many MajorTemplates
     * const majorTemplate = await prisma.majorTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MajorTemplates and only return the `id`
     * const majorTemplateWithIdOnly = await prisma.majorTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MajorTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, MajorTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MajorTemplate.
     * @param {MajorTemplateDeleteArgs} args - Arguments to delete one MajorTemplate.
     * @example
     * // Delete one MajorTemplate
     * const MajorTemplate = await prisma.majorTemplate.delete({
     *   where: {
     *     // ... filter to delete one MajorTemplate
     *   }
     * })
     * 
     */
    delete<T extends MajorTemplateDeleteArgs>(args: SelectSubset<T, MajorTemplateDeleteArgs<ExtArgs>>): Prisma__MajorTemplateClient<$Result.GetResult<Prisma.$MajorTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MajorTemplate.
     * @param {MajorTemplateUpdateArgs} args - Arguments to update one MajorTemplate.
     * @example
     * // Update one MajorTemplate
     * const majorTemplate = await prisma.majorTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MajorTemplateUpdateArgs>(args: SelectSubset<T, MajorTemplateUpdateArgs<ExtArgs>>): Prisma__MajorTemplateClient<$Result.GetResult<Prisma.$MajorTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MajorTemplates.
     * @param {MajorTemplateDeleteManyArgs} args - Arguments to filter MajorTemplates to delete.
     * @example
     * // Delete a few MajorTemplates
     * const { count } = await prisma.majorTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MajorTemplateDeleteManyArgs>(args?: SelectSubset<T, MajorTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MajorTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MajorTemplates
     * const majorTemplate = await prisma.majorTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MajorTemplateUpdateManyArgs>(args: SelectSubset<T, MajorTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MajorTemplates and returns the data updated in the database.
     * @param {MajorTemplateUpdateManyAndReturnArgs} args - Arguments to update many MajorTemplates.
     * @example
     * // Update many MajorTemplates
     * const majorTemplate = await prisma.majorTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MajorTemplates and only return the `id`
     * const majorTemplateWithIdOnly = await prisma.majorTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MajorTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, MajorTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MajorTemplate.
     * @param {MajorTemplateUpsertArgs} args - Arguments to update or create a MajorTemplate.
     * @example
     * // Update or create a MajorTemplate
     * const majorTemplate = await prisma.majorTemplate.upsert({
     *   create: {
     *     // ... data to create a MajorTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MajorTemplate we want to update
     *   }
     * })
     */
    upsert<T extends MajorTemplateUpsertArgs>(args: SelectSubset<T, MajorTemplateUpsertArgs<ExtArgs>>): Prisma__MajorTemplateClient<$Result.GetResult<Prisma.$MajorTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MajorTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorTemplateCountArgs} args - Arguments to filter MajorTemplates to count.
     * @example
     * // Count the number of MajorTemplates
     * const count = await prisma.majorTemplate.count({
     *   where: {
     *     // ... the filter for the MajorTemplates we want to count
     *   }
     * })
    **/
    count<T extends MajorTemplateCountArgs>(
      args?: Subset<T, MajorTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MajorTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MajorTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MajorTemplateAggregateArgs>(args: Subset<T, MajorTemplateAggregateArgs>): Prisma.PrismaPromise<GetMajorTemplateAggregateType<T>>

    /**
     * Group by MajorTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MajorTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MajorTemplateGroupByArgs['orderBy'] }
        : { orderBy?: MajorTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MajorTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMajorTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MajorTemplate model
   */
  readonly fields: MajorTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MajorTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MajorTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MajorTemplate model
   */
  interface MajorTemplateFieldRefs {
    readonly id: FieldRef<"MajorTemplate", 'String'>
    readonly majorCode: FieldRef<"MajorTemplate", 'String'>
    readonly majorName: FieldRef<"MajorTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MajorTemplate findUnique
   */
  export type MajorTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorTemplate
     */
    select?: MajorTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorTemplate
     */
    omit?: MajorTemplateOmit<ExtArgs> | null
    /**
     * Filter, which MajorTemplate to fetch.
     */
    where: MajorTemplateWhereUniqueInput
  }

  /**
   * MajorTemplate findUniqueOrThrow
   */
  export type MajorTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorTemplate
     */
    select?: MajorTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorTemplate
     */
    omit?: MajorTemplateOmit<ExtArgs> | null
    /**
     * Filter, which MajorTemplate to fetch.
     */
    where: MajorTemplateWhereUniqueInput
  }

  /**
   * MajorTemplate findFirst
   */
  export type MajorTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorTemplate
     */
    select?: MajorTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorTemplate
     */
    omit?: MajorTemplateOmit<ExtArgs> | null
    /**
     * Filter, which MajorTemplate to fetch.
     */
    where?: MajorTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorTemplates to fetch.
     */
    orderBy?: MajorTemplateOrderByWithRelationInput | MajorTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MajorTemplates.
     */
    cursor?: MajorTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MajorTemplates.
     */
    distinct?: MajorTemplateScalarFieldEnum | MajorTemplateScalarFieldEnum[]
  }

  /**
   * MajorTemplate findFirstOrThrow
   */
  export type MajorTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorTemplate
     */
    select?: MajorTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorTemplate
     */
    omit?: MajorTemplateOmit<ExtArgs> | null
    /**
     * Filter, which MajorTemplate to fetch.
     */
    where?: MajorTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorTemplates to fetch.
     */
    orderBy?: MajorTemplateOrderByWithRelationInput | MajorTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MajorTemplates.
     */
    cursor?: MajorTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MajorTemplates.
     */
    distinct?: MajorTemplateScalarFieldEnum | MajorTemplateScalarFieldEnum[]
  }

  /**
   * MajorTemplate findMany
   */
  export type MajorTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorTemplate
     */
    select?: MajorTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorTemplate
     */
    omit?: MajorTemplateOmit<ExtArgs> | null
    /**
     * Filter, which MajorTemplates to fetch.
     */
    where?: MajorTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorTemplates to fetch.
     */
    orderBy?: MajorTemplateOrderByWithRelationInput | MajorTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MajorTemplates.
     */
    cursor?: MajorTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MajorTemplates.
     */
    distinct?: MajorTemplateScalarFieldEnum | MajorTemplateScalarFieldEnum[]
  }

  /**
   * MajorTemplate create
   */
  export type MajorTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorTemplate
     */
    select?: MajorTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorTemplate
     */
    omit?: MajorTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a MajorTemplate.
     */
    data: XOR<MajorTemplateCreateInput, MajorTemplateUncheckedCreateInput>
  }

  /**
   * MajorTemplate createMany
   */
  export type MajorTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MajorTemplates.
     */
    data: MajorTemplateCreateManyInput | MajorTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MajorTemplate createManyAndReturn
   */
  export type MajorTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorTemplate
     */
    select?: MajorTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MajorTemplate
     */
    omit?: MajorTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many MajorTemplates.
     */
    data: MajorTemplateCreateManyInput | MajorTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MajorTemplate update
   */
  export type MajorTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorTemplate
     */
    select?: MajorTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorTemplate
     */
    omit?: MajorTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a MajorTemplate.
     */
    data: XOR<MajorTemplateUpdateInput, MajorTemplateUncheckedUpdateInput>
    /**
     * Choose, which MajorTemplate to update.
     */
    where: MajorTemplateWhereUniqueInput
  }

  /**
   * MajorTemplate updateMany
   */
  export type MajorTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MajorTemplates.
     */
    data: XOR<MajorTemplateUpdateManyMutationInput, MajorTemplateUncheckedUpdateManyInput>
    /**
     * Filter which MajorTemplates to update
     */
    where?: MajorTemplateWhereInput
    /**
     * Limit how many MajorTemplates to update.
     */
    limit?: number
  }

  /**
   * MajorTemplate updateManyAndReturn
   */
  export type MajorTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorTemplate
     */
    select?: MajorTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MajorTemplate
     */
    omit?: MajorTemplateOmit<ExtArgs> | null
    /**
     * The data used to update MajorTemplates.
     */
    data: XOR<MajorTemplateUpdateManyMutationInput, MajorTemplateUncheckedUpdateManyInput>
    /**
     * Filter which MajorTemplates to update
     */
    where?: MajorTemplateWhereInput
    /**
     * Limit how many MajorTemplates to update.
     */
    limit?: number
  }

  /**
   * MajorTemplate upsert
   */
  export type MajorTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorTemplate
     */
    select?: MajorTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorTemplate
     */
    omit?: MajorTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the MajorTemplate to update in case it exists.
     */
    where: MajorTemplateWhereUniqueInput
    /**
     * In case the MajorTemplate found by the `where` argument doesn't exist, create a new MajorTemplate with this data.
     */
    create: XOR<MajorTemplateCreateInput, MajorTemplateUncheckedCreateInput>
    /**
     * In case the MajorTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MajorTemplateUpdateInput, MajorTemplateUncheckedUpdateInput>
  }

  /**
   * MajorTemplate delete
   */
  export type MajorTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorTemplate
     */
    select?: MajorTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorTemplate
     */
    omit?: MajorTemplateOmit<ExtArgs> | null
    /**
     * Filter which MajorTemplate to delete.
     */
    where: MajorTemplateWhereUniqueInput
  }

  /**
   * MajorTemplate deleteMany
   */
  export type MajorTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MajorTemplates to delete
     */
    where?: MajorTemplateWhereInput
    /**
     * Limit how many MajorTemplates to delete.
     */
    limit?: number
  }

  /**
   * MajorTemplate without action
   */
  export type MajorTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorTemplate
     */
    select?: MajorTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorTemplate
     */
    omit?: MajorTemplateOmit<ExtArgs> | null
  }


  /**
   * Model UserPlanModule
   */

  export type AggregateUserPlanModule = {
    _count: UserPlanModuleCountAggregateOutputType | null
    _min: UserPlanModuleMinAggregateOutputType | null
    _max: UserPlanModuleMaxAggregateOutputType | null
  }

  export type UserPlanModuleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    semesterTag: string | null
    colorTag: string | null
    completed: boolean | null
  }

  export type UserPlanModuleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    semesterTag: string | null
    colorTag: string | null
    completed: boolean | null
  }

  export type UserPlanModuleCountAggregateOutputType = {
    id: number
    userId: number
    moduleId: number
    semesterTag: number
    colorTag: number
    completed: number
    _all: number
  }


  export type UserPlanModuleMinAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    semesterTag?: true
    colorTag?: true
    completed?: true
  }

  export type UserPlanModuleMaxAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    semesterTag?: true
    colorTag?: true
    completed?: true
  }

  export type UserPlanModuleCountAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    semesterTag?: true
    colorTag?: true
    completed?: true
    _all?: true
  }

  export type UserPlanModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPlanModule to aggregate.
     */
    where?: UserPlanModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlanModules to fetch.
     */
    orderBy?: UserPlanModuleOrderByWithRelationInput | UserPlanModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPlanModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlanModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlanModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPlanModules
    **/
    _count?: true | UserPlanModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPlanModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPlanModuleMaxAggregateInputType
  }

  export type GetUserPlanModuleAggregateType<T extends UserPlanModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPlanModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPlanModule[P]>
      : GetScalarType<T[P], AggregateUserPlanModule[P]>
  }




  export type UserPlanModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlanModuleWhereInput
    orderBy?: UserPlanModuleOrderByWithAggregationInput | UserPlanModuleOrderByWithAggregationInput[]
    by: UserPlanModuleScalarFieldEnum[] | UserPlanModuleScalarFieldEnum
    having?: UserPlanModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPlanModuleCountAggregateInputType | true
    _min?: UserPlanModuleMinAggregateInputType
    _max?: UserPlanModuleMaxAggregateInputType
  }

  export type UserPlanModuleGroupByOutputType = {
    id: string
    userId: string
    moduleId: string
    semesterTag: string | null
    colorTag: string | null
    completed: boolean
    _count: UserPlanModuleCountAggregateOutputType | null
    _min: UserPlanModuleMinAggregateOutputType | null
    _max: UserPlanModuleMaxAggregateOutputType | null
  }

  type GetUserPlanModuleGroupByPayload<T extends UserPlanModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPlanModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPlanModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPlanModuleGroupByOutputType[P]>
            : GetScalarType<T[P], UserPlanModuleGroupByOutputType[P]>
        }
      >
    >


  export type UserPlanModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    semesterTag?: boolean
    colorTag?: boolean
    completed?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPlanModule"]>

  export type UserPlanModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    semesterTag?: boolean
    colorTag?: boolean
    completed?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPlanModule"]>

  export type UserPlanModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    semesterTag?: boolean
    colorTag?: boolean
    completed?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPlanModule"]>

  export type UserPlanModuleSelectScalar = {
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    semesterTag?: boolean
    colorTag?: boolean
    completed?: boolean
  }

  export type UserPlanModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "moduleId" | "semesterTag" | "colorTag" | "completed", ExtArgs["result"]["userPlanModule"]>
  export type UserPlanModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type UserPlanModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type UserPlanModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $UserPlanModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPlanModule"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      moduleId: string
      semesterTag: string | null
      colorTag: string | null
      completed: boolean
    }, ExtArgs["result"]["userPlanModule"]>
    composites: {}
  }

  type UserPlanModuleGetPayload<S extends boolean | null | undefined | UserPlanModuleDefaultArgs> = $Result.GetResult<Prisma.$UserPlanModulePayload, S>

  type UserPlanModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPlanModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPlanModuleCountAggregateInputType | true
    }

  export interface UserPlanModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPlanModule'], meta: { name: 'UserPlanModule' } }
    /**
     * Find zero or one UserPlanModule that matches the filter.
     * @param {UserPlanModuleFindUniqueArgs} args - Arguments to find a UserPlanModule
     * @example
     * // Get one UserPlanModule
     * const userPlanModule = await prisma.userPlanModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPlanModuleFindUniqueArgs>(args: SelectSubset<T, UserPlanModuleFindUniqueArgs<ExtArgs>>): Prisma__UserPlanModuleClient<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPlanModule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPlanModuleFindUniqueOrThrowArgs} args - Arguments to find a UserPlanModule
     * @example
     * // Get one UserPlanModule
     * const userPlanModule = await prisma.userPlanModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPlanModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPlanModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPlanModuleClient<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPlanModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanModuleFindFirstArgs} args - Arguments to find a UserPlanModule
     * @example
     * // Get one UserPlanModule
     * const userPlanModule = await prisma.userPlanModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPlanModuleFindFirstArgs>(args?: SelectSubset<T, UserPlanModuleFindFirstArgs<ExtArgs>>): Prisma__UserPlanModuleClient<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPlanModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanModuleFindFirstOrThrowArgs} args - Arguments to find a UserPlanModule
     * @example
     * // Get one UserPlanModule
     * const userPlanModule = await prisma.userPlanModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPlanModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPlanModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPlanModuleClient<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPlanModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPlanModules
     * const userPlanModules = await prisma.userPlanModule.findMany()
     * 
     * // Get first 10 UserPlanModules
     * const userPlanModules = await prisma.userPlanModule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPlanModuleWithIdOnly = await prisma.userPlanModule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPlanModuleFindManyArgs>(args?: SelectSubset<T, UserPlanModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPlanModule.
     * @param {UserPlanModuleCreateArgs} args - Arguments to create a UserPlanModule.
     * @example
     * // Create one UserPlanModule
     * const UserPlanModule = await prisma.userPlanModule.create({
     *   data: {
     *     // ... data to create a UserPlanModule
     *   }
     * })
     * 
     */
    create<T extends UserPlanModuleCreateArgs>(args: SelectSubset<T, UserPlanModuleCreateArgs<ExtArgs>>): Prisma__UserPlanModuleClient<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPlanModules.
     * @param {UserPlanModuleCreateManyArgs} args - Arguments to create many UserPlanModules.
     * @example
     * // Create many UserPlanModules
     * const userPlanModule = await prisma.userPlanModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPlanModuleCreateManyArgs>(args?: SelectSubset<T, UserPlanModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPlanModules and returns the data saved in the database.
     * @param {UserPlanModuleCreateManyAndReturnArgs} args - Arguments to create many UserPlanModules.
     * @example
     * // Create many UserPlanModules
     * const userPlanModule = await prisma.userPlanModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPlanModules and only return the `id`
     * const userPlanModuleWithIdOnly = await prisma.userPlanModule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPlanModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPlanModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPlanModule.
     * @param {UserPlanModuleDeleteArgs} args - Arguments to delete one UserPlanModule.
     * @example
     * // Delete one UserPlanModule
     * const UserPlanModule = await prisma.userPlanModule.delete({
     *   where: {
     *     // ... filter to delete one UserPlanModule
     *   }
     * })
     * 
     */
    delete<T extends UserPlanModuleDeleteArgs>(args: SelectSubset<T, UserPlanModuleDeleteArgs<ExtArgs>>): Prisma__UserPlanModuleClient<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPlanModule.
     * @param {UserPlanModuleUpdateArgs} args - Arguments to update one UserPlanModule.
     * @example
     * // Update one UserPlanModule
     * const userPlanModule = await prisma.userPlanModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPlanModuleUpdateArgs>(args: SelectSubset<T, UserPlanModuleUpdateArgs<ExtArgs>>): Prisma__UserPlanModuleClient<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPlanModules.
     * @param {UserPlanModuleDeleteManyArgs} args - Arguments to filter UserPlanModules to delete.
     * @example
     * // Delete a few UserPlanModules
     * const { count } = await prisma.userPlanModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPlanModuleDeleteManyArgs>(args?: SelectSubset<T, UserPlanModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPlanModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPlanModules
     * const userPlanModule = await prisma.userPlanModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPlanModuleUpdateManyArgs>(args: SelectSubset<T, UserPlanModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPlanModules and returns the data updated in the database.
     * @param {UserPlanModuleUpdateManyAndReturnArgs} args - Arguments to update many UserPlanModules.
     * @example
     * // Update many UserPlanModules
     * const userPlanModule = await prisma.userPlanModule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPlanModules and only return the `id`
     * const userPlanModuleWithIdOnly = await prisma.userPlanModule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPlanModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPlanModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPlanModule.
     * @param {UserPlanModuleUpsertArgs} args - Arguments to update or create a UserPlanModule.
     * @example
     * // Update or create a UserPlanModule
     * const userPlanModule = await prisma.userPlanModule.upsert({
     *   create: {
     *     // ... data to create a UserPlanModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPlanModule we want to update
     *   }
     * })
     */
    upsert<T extends UserPlanModuleUpsertArgs>(args: SelectSubset<T, UserPlanModuleUpsertArgs<ExtArgs>>): Prisma__UserPlanModuleClient<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPlanModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanModuleCountArgs} args - Arguments to filter UserPlanModules to count.
     * @example
     * // Count the number of UserPlanModules
     * const count = await prisma.userPlanModule.count({
     *   where: {
     *     // ... the filter for the UserPlanModules we want to count
     *   }
     * })
    **/
    count<T extends UserPlanModuleCountArgs>(
      args?: Subset<T, UserPlanModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPlanModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPlanModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPlanModuleAggregateArgs>(args: Subset<T, UserPlanModuleAggregateArgs>): Prisma.PrismaPromise<GetUserPlanModuleAggregateType<T>>

    /**
     * Group by UserPlanModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPlanModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPlanModuleGroupByArgs['orderBy'] }
        : { orderBy?: UserPlanModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPlanModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPlanModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPlanModule model
   */
  readonly fields: UserPlanModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPlanModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPlanModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPlanModule model
   */
  interface UserPlanModuleFieldRefs {
    readonly id: FieldRef<"UserPlanModule", 'String'>
    readonly userId: FieldRef<"UserPlanModule", 'String'>
    readonly moduleId: FieldRef<"UserPlanModule", 'String'>
    readonly semesterTag: FieldRef<"UserPlanModule", 'String'>
    readonly colorTag: FieldRef<"UserPlanModule", 'String'>
    readonly completed: FieldRef<"UserPlanModule", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserPlanModule findUnique
   */
  export type UserPlanModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleInclude<ExtArgs> | null
    /**
     * Filter, which UserPlanModule to fetch.
     */
    where: UserPlanModuleWhereUniqueInput
  }

  /**
   * UserPlanModule findUniqueOrThrow
   */
  export type UserPlanModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleInclude<ExtArgs> | null
    /**
     * Filter, which UserPlanModule to fetch.
     */
    where: UserPlanModuleWhereUniqueInput
  }

  /**
   * UserPlanModule findFirst
   */
  export type UserPlanModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleInclude<ExtArgs> | null
    /**
     * Filter, which UserPlanModule to fetch.
     */
    where?: UserPlanModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlanModules to fetch.
     */
    orderBy?: UserPlanModuleOrderByWithRelationInput | UserPlanModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPlanModules.
     */
    cursor?: UserPlanModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlanModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlanModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPlanModules.
     */
    distinct?: UserPlanModuleScalarFieldEnum | UserPlanModuleScalarFieldEnum[]
  }

  /**
   * UserPlanModule findFirstOrThrow
   */
  export type UserPlanModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleInclude<ExtArgs> | null
    /**
     * Filter, which UserPlanModule to fetch.
     */
    where?: UserPlanModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlanModules to fetch.
     */
    orderBy?: UserPlanModuleOrderByWithRelationInput | UserPlanModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPlanModules.
     */
    cursor?: UserPlanModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlanModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlanModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPlanModules.
     */
    distinct?: UserPlanModuleScalarFieldEnum | UserPlanModuleScalarFieldEnum[]
  }

  /**
   * UserPlanModule findMany
   */
  export type UserPlanModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleInclude<ExtArgs> | null
    /**
     * Filter, which UserPlanModules to fetch.
     */
    where?: UserPlanModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlanModules to fetch.
     */
    orderBy?: UserPlanModuleOrderByWithRelationInput | UserPlanModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPlanModules.
     */
    cursor?: UserPlanModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlanModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlanModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPlanModules.
     */
    distinct?: UserPlanModuleScalarFieldEnum | UserPlanModuleScalarFieldEnum[]
  }

  /**
   * UserPlanModule create
   */
  export type UserPlanModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPlanModule.
     */
    data: XOR<UserPlanModuleCreateInput, UserPlanModuleUncheckedCreateInput>
  }

  /**
   * UserPlanModule createMany
   */
  export type UserPlanModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPlanModules.
     */
    data: UserPlanModuleCreateManyInput | UserPlanModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPlanModule createManyAndReturn
   */
  export type UserPlanModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * The data used to create many UserPlanModules.
     */
    data: UserPlanModuleCreateManyInput | UserPlanModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPlanModule update
   */
  export type UserPlanModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPlanModule.
     */
    data: XOR<UserPlanModuleUpdateInput, UserPlanModuleUncheckedUpdateInput>
    /**
     * Choose, which UserPlanModule to update.
     */
    where: UserPlanModuleWhereUniqueInput
  }

  /**
   * UserPlanModule updateMany
   */
  export type UserPlanModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPlanModules.
     */
    data: XOR<UserPlanModuleUpdateManyMutationInput, UserPlanModuleUncheckedUpdateManyInput>
    /**
     * Filter which UserPlanModules to update
     */
    where?: UserPlanModuleWhereInput
    /**
     * Limit how many UserPlanModules to update.
     */
    limit?: number
  }

  /**
   * UserPlanModule updateManyAndReturn
   */
  export type UserPlanModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * The data used to update UserPlanModules.
     */
    data: XOR<UserPlanModuleUpdateManyMutationInput, UserPlanModuleUncheckedUpdateManyInput>
    /**
     * Filter which UserPlanModules to update
     */
    where?: UserPlanModuleWhereInput
    /**
     * Limit how many UserPlanModules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPlanModule upsert
   */
  export type UserPlanModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPlanModule to update in case it exists.
     */
    where: UserPlanModuleWhereUniqueInput
    /**
     * In case the UserPlanModule found by the `where` argument doesn't exist, create a new UserPlanModule with this data.
     */
    create: XOR<UserPlanModuleCreateInput, UserPlanModuleUncheckedCreateInput>
    /**
     * In case the UserPlanModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPlanModuleUpdateInput, UserPlanModuleUncheckedUpdateInput>
  }

  /**
   * UserPlanModule delete
   */
  export type UserPlanModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleInclude<ExtArgs> | null
    /**
     * Filter which UserPlanModule to delete.
     */
    where: UserPlanModuleWhereUniqueInput
  }

  /**
   * UserPlanModule deleteMany
   */
  export type UserPlanModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPlanModules to delete
     */
    where?: UserPlanModuleWhereInput
    /**
     * Limit how many UserPlanModules to delete.
     */
    limit?: number
  }

  /**
   * UserPlanModule without action
   */
  export type UserPlanModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanModule
     */
    select?: UserPlanModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlanModule
     */
    omit?: UserPlanModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlanModuleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    department: 'department',
    workload: 'workload',
    prereqTree: 'prereqTree'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const MajorTemplateScalarFieldEnum: {
    id: 'id',
    majorCode: 'majorCode',
    majorName: 'majorName'
  };

  export type MajorTemplateScalarFieldEnum = (typeof MajorTemplateScalarFieldEnum)[keyof typeof MajorTemplateScalarFieldEnum]


  export const UserPlanModuleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    moduleId: 'moduleId',
    semesterTag: 'semesterTag',
    colorTag: 'colorTag',
    completed: 'completed'
  };

  export type UserPlanModuleScalarFieldEnum = (typeof UserPlanModuleScalarFieldEnum)[keyof typeof UserPlanModuleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    description?: StringNullableFilter<"Module"> | string | null
    department?: StringNullableFilter<"Module"> | string | null
    workload?: FloatNullableFilter<"Module"> | number | null
    prereqTree?: JsonNullableFilter<"Module">
    userPlanModules?: UserPlanModuleListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    workload?: SortOrderInput | SortOrder
    prereqTree?: SortOrderInput | SortOrder
    userPlanModules?: UserPlanModuleOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    title?: StringFilter<"Module"> | string
    description?: StringNullableFilter<"Module"> | string | null
    department?: StringNullableFilter<"Module"> | string | null
    workload?: FloatNullableFilter<"Module"> | number | null
    prereqTree?: JsonNullableFilter<"Module">
    userPlanModules?: UserPlanModuleListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    workload?: SortOrderInput | SortOrder
    prereqTree?: SortOrderInput | SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Module"> | string
    title?: StringWithAggregatesFilter<"Module"> | string
    description?: StringNullableWithAggregatesFilter<"Module"> | string | null
    department?: StringNullableWithAggregatesFilter<"Module"> | string | null
    workload?: FloatNullableWithAggregatesFilter<"Module"> | number | null
    prereqTree?: JsonNullableWithAggregatesFilter<"Module">
  }

  export type MajorTemplateWhereInput = {
    AND?: MajorTemplateWhereInput | MajorTemplateWhereInput[]
    OR?: MajorTemplateWhereInput[]
    NOT?: MajorTemplateWhereInput | MajorTemplateWhereInput[]
    id?: StringFilter<"MajorTemplate"> | string
    majorCode?: StringFilter<"MajorTemplate"> | string
    majorName?: StringFilter<"MajorTemplate"> | string
  }

  export type MajorTemplateOrderByWithRelationInput = {
    id?: SortOrder
    majorCode?: SortOrder
    majorName?: SortOrder
  }

  export type MajorTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    majorCode?: string
    AND?: MajorTemplateWhereInput | MajorTemplateWhereInput[]
    OR?: MajorTemplateWhereInput[]
    NOT?: MajorTemplateWhereInput | MajorTemplateWhereInput[]
    majorName?: StringFilter<"MajorTemplate"> | string
  }, "id" | "majorCode">

  export type MajorTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    majorCode?: SortOrder
    majorName?: SortOrder
    _count?: MajorTemplateCountOrderByAggregateInput
    _max?: MajorTemplateMaxOrderByAggregateInput
    _min?: MajorTemplateMinOrderByAggregateInput
  }

  export type MajorTemplateScalarWhereWithAggregatesInput = {
    AND?: MajorTemplateScalarWhereWithAggregatesInput | MajorTemplateScalarWhereWithAggregatesInput[]
    OR?: MajorTemplateScalarWhereWithAggregatesInput[]
    NOT?: MajorTemplateScalarWhereWithAggregatesInput | MajorTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MajorTemplate"> | string
    majorCode?: StringWithAggregatesFilter<"MajorTemplate"> | string
    majorName?: StringWithAggregatesFilter<"MajorTemplate"> | string
  }

  export type UserPlanModuleWhereInput = {
    AND?: UserPlanModuleWhereInput | UserPlanModuleWhereInput[]
    OR?: UserPlanModuleWhereInput[]
    NOT?: UserPlanModuleWhereInput | UserPlanModuleWhereInput[]
    id?: StringFilter<"UserPlanModule"> | string
    userId?: StringFilter<"UserPlanModule"> | string
    moduleId?: StringFilter<"UserPlanModule"> | string
    semesterTag?: StringNullableFilter<"UserPlanModule"> | string | null
    colorTag?: StringNullableFilter<"UserPlanModule"> | string | null
    completed?: BoolFilter<"UserPlanModule"> | boolean
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type UserPlanModuleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    semesterTag?: SortOrderInput | SortOrder
    colorTag?: SortOrderInput | SortOrder
    completed?: SortOrder
    module?: ModuleOrderByWithRelationInput
  }

  export type UserPlanModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserPlanModuleWhereInput | UserPlanModuleWhereInput[]
    OR?: UserPlanModuleWhereInput[]
    NOT?: UserPlanModuleWhereInput | UserPlanModuleWhereInput[]
    userId?: StringFilter<"UserPlanModule"> | string
    moduleId?: StringFilter<"UserPlanModule"> | string
    semesterTag?: StringNullableFilter<"UserPlanModule"> | string | null
    colorTag?: StringNullableFilter<"UserPlanModule"> | string | null
    completed?: BoolFilter<"UserPlanModule"> | boolean
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id">

  export type UserPlanModuleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    semesterTag?: SortOrderInput | SortOrder
    colorTag?: SortOrderInput | SortOrder
    completed?: SortOrder
    _count?: UserPlanModuleCountOrderByAggregateInput
    _max?: UserPlanModuleMaxOrderByAggregateInput
    _min?: UserPlanModuleMinOrderByAggregateInput
  }

  export type UserPlanModuleScalarWhereWithAggregatesInput = {
    AND?: UserPlanModuleScalarWhereWithAggregatesInput | UserPlanModuleScalarWhereWithAggregatesInput[]
    OR?: UserPlanModuleScalarWhereWithAggregatesInput[]
    NOT?: UserPlanModuleScalarWhereWithAggregatesInput | UserPlanModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPlanModule"> | string
    userId?: StringWithAggregatesFilter<"UserPlanModule"> | string
    moduleId?: StringWithAggregatesFilter<"UserPlanModule"> | string
    semesterTag?: StringNullableWithAggregatesFilter<"UserPlanModule"> | string | null
    colorTag?: StringNullableWithAggregatesFilter<"UserPlanModule"> | string | null
    completed?: BoolWithAggregatesFilter<"UserPlanModule"> | boolean
  }

  export type ModuleCreateInput = {
    id: string
    title: string
    description?: string | null
    department?: string | null
    workload?: number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    userPlanModules?: UserPlanModuleCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id: string
    title: string
    description?: string | null
    department?: string | null
    workload?: number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    userPlanModules?: UserPlanModuleUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    userPlanModules?: UserPlanModuleUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    userPlanModules?: UserPlanModuleUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id: string
    title: string
    description?: string | null
    department?: string | null
    workload?: number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MajorTemplateCreateInput = {
    id?: string
    majorCode: string
    majorName: string
  }

  export type MajorTemplateUncheckedCreateInput = {
    id?: string
    majorCode: string
    majorName: string
  }

  export type MajorTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
  }

  export type MajorTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
  }

  export type MajorTemplateCreateManyInput = {
    id?: string
    majorCode: string
    majorName: string
  }

  export type MajorTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
  }

  export type MajorTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
  }

  export type UserPlanModuleCreateInput = {
    id?: string
    userId: string
    semesterTag?: string | null
    colorTag?: string | null
    completed?: boolean
    module: ModuleCreateNestedOneWithoutUserPlanModulesInput
  }

  export type UserPlanModuleUncheckedCreateInput = {
    id?: string
    userId: string
    moduleId: string
    semesterTag?: string | null
    colorTag?: string | null
    completed?: boolean
  }

  export type UserPlanModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    semesterTag?: NullableStringFieldUpdateOperationsInput | string | null
    colorTag?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    module?: ModuleUpdateOneRequiredWithoutUserPlanModulesNestedInput
  }

  export type UserPlanModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    semesterTag?: NullableStringFieldUpdateOperationsInput | string | null
    colorTag?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPlanModuleCreateManyInput = {
    id?: string
    userId: string
    moduleId: string
    semesterTag?: string | null
    colorTag?: string | null
    completed?: boolean
  }

  export type UserPlanModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    semesterTag?: NullableStringFieldUpdateOperationsInput | string | null
    colorTag?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPlanModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    semesterTag?: NullableStringFieldUpdateOperationsInput | string | null
    colorTag?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserPlanModuleListRelationFilter = {
    every?: UserPlanModuleWhereInput
    some?: UserPlanModuleWhereInput
    none?: UserPlanModuleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserPlanModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    department?: SortOrder
    workload?: SortOrder
    prereqTree?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    workload?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    department?: SortOrder
    workload?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    department?: SortOrder
    workload?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    workload?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type MajorTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    majorCode?: SortOrder
    majorName?: SortOrder
  }

  export type MajorTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    majorCode?: SortOrder
    majorName?: SortOrder
  }

  export type MajorTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    majorCode?: SortOrder
    majorName?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type UserPlanModuleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    semesterTag?: SortOrder
    colorTag?: SortOrder
    completed?: SortOrder
  }

  export type UserPlanModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    semesterTag?: SortOrder
    colorTag?: SortOrder
    completed?: SortOrder
  }

  export type UserPlanModuleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    semesterTag?: SortOrder
    colorTag?: SortOrder
    completed?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserPlanModuleCreateNestedManyWithoutModuleInput = {
    create?: XOR<UserPlanModuleCreateWithoutModuleInput, UserPlanModuleUncheckedCreateWithoutModuleInput> | UserPlanModuleCreateWithoutModuleInput[] | UserPlanModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutModuleInput | UserPlanModuleCreateOrConnectWithoutModuleInput[]
    createMany?: UserPlanModuleCreateManyModuleInputEnvelope
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
  }

  export type UserPlanModuleUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<UserPlanModuleCreateWithoutModuleInput, UserPlanModuleUncheckedCreateWithoutModuleInput> | UserPlanModuleCreateWithoutModuleInput[] | UserPlanModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutModuleInput | UserPlanModuleCreateOrConnectWithoutModuleInput[]
    createMany?: UserPlanModuleCreateManyModuleInputEnvelope
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserPlanModuleUpdateManyWithoutModuleNestedInput = {
    create?: XOR<UserPlanModuleCreateWithoutModuleInput, UserPlanModuleUncheckedCreateWithoutModuleInput> | UserPlanModuleCreateWithoutModuleInput[] | UserPlanModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutModuleInput | UserPlanModuleCreateOrConnectWithoutModuleInput[]
    upsert?: UserPlanModuleUpsertWithWhereUniqueWithoutModuleInput | UserPlanModuleUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: UserPlanModuleCreateManyModuleInputEnvelope
    set?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    disconnect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    delete?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    update?: UserPlanModuleUpdateWithWhereUniqueWithoutModuleInput | UserPlanModuleUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: UserPlanModuleUpdateManyWithWhereWithoutModuleInput | UserPlanModuleUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: UserPlanModuleScalarWhereInput | UserPlanModuleScalarWhereInput[]
  }

  export type UserPlanModuleUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<UserPlanModuleCreateWithoutModuleInput, UserPlanModuleUncheckedCreateWithoutModuleInput> | UserPlanModuleCreateWithoutModuleInput[] | UserPlanModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutModuleInput | UserPlanModuleCreateOrConnectWithoutModuleInput[]
    upsert?: UserPlanModuleUpsertWithWhereUniqueWithoutModuleInput | UserPlanModuleUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: UserPlanModuleCreateManyModuleInputEnvelope
    set?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    disconnect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    delete?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    update?: UserPlanModuleUpdateWithWhereUniqueWithoutModuleInput | UserPlanModuleUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: UserPlanModuleUpdateManyWithWhereWithoutModuleInput | UserPlanModuleUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: UserPlanModuleScalarWhereInput | UserPlanModuleScalarWhereInput[]
  }

  export type ModuleCreateNestedOneWithoutUserPlanModulesInput = {
    create?: XOR<ModuleCreateWithoutUserPlanModulesInput, ModuleUncheckedCreateWithoutUserPlanModulesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutUserPlanModulesInput
    connect?: ModuleWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ModuleUpdateOneRequiredWithoutUserPlanModulesNestedInput = {
    create?: XOR<ModuleCreateWithoutUserPlanModulesInput, ModuleUncheckedCreateWithoutUserPlanModulesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutUserPlanModulesInput
    upsert?: ModuleUpsertWithoutUserPlanModulesInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutUserPlanModulesInput, ModuleUpdateWithoutUserPlanModulesInput>, ModuleUncheckedUpdateWithoutUserPlanModulesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserPlanModuleCreateWithoutModuleInput = {
    id?: string
    userId: string
    semesterTag?: string | null
    colorTag?: string | null
    completed?: boolean
  }

  export type UserPlanModuleUncheckedCreateWithoutModuleInput = {
    id?: string
    userId: string
    semesterTag?: string | null
    colorTag?: string | null
    completed?: boolean
  }

  export type UserPlanModuleCreateOrConnectWithoutModuleInput = {
    where: UserPlanModuleWhereUniqueInput
    create: XOR<UserPlanModuleCreateWithoutModuleInput, UserPlanModuleUncheckedCreateWithoutModuleInput>
  }

  export type UserPlanModuleCreateManyModuleInputEnvelope = {
    data: UserPlanModuleCreateManyModuleInput | UserPlanModuleCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type UserPlanModuleUpsertWithWhereUniqueWithoutModuleInput = {
    where: UserPlanModuleWhereUniqueInput
    update: XOR<UserPlanModuleUpdateWithoutModuleInput, UserPlanModuleUncheckedUpdateWithoutModuleInput>
    create: XOR<UserPlanModuleCreateWithoutModuleInput, UserPlanModuleUncheckedCreateWithoutModuleInput>
  }

  export type UserPlanModuleUpdateWithWhereUniqueWithoutModuleInput = {
    where: UserPlanModuleWhereUniqueInput
    data: XOR<UserPlanModuleUpdateWithoutModuleInput, UserPlanModuleUncheckedUpdateWithoutModuleInput>
  }

  export type UserPlanModuleUpdateManyWithWhereWithoutModuleInput = {
    where: UserPlanModuleScalarWhereInput
    data: XOR<UserPlanModuleUpdateManyMutationInput, UserPlanModuleUncheckedUpdateManyWithoutModuleInput>
  }

  export type UserPlanModuleScalarWhereInput = {
    AND?: UserPlanModuleScalarWhereInput | UserPlanModuleScalarWhereInput[]
    OR?: UserPlanModuleScalarWhereInput[]
    NOT?: UserPlanModuleScalarWhereInput | UserPlanModuleScalarWhereInput[]
    id?: StringFilter<"UserPlanModule"> | string
    userId?: StringFilter<"UserPlanModule"> | string
    moduleId?: StringFilter<"UserPlanModule"> | string
    semesterTag?: StringNullableFilter<"UserPlanModule"> | string | null
    colorTag?: StringNullableFilter<"UserPlanModule"> | string | null
    completed?: BoolFilter<"UserPlanModule"> | boolean
  }

  export type ModuleCreateWithoutUserPlanModulesInput = {
    id: string
    title: string
    description?: string | null
    department?: string | null
    workload?: number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModuleUncheckedCreateWithoutUserPlanModulesInput = {
    id: string
    title: string
    description?: string | null
    department?: string | null
    workload?: number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModuleCreateOrConnectWithoutUserPlanModulesInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutUserPlanModulesInput, ModuleUncheckedCreateWithoutUserPlanModulesInput>
  }

  export type ModuleUpsertWithoutUserPlanModulesInput = {
    update: XOR<ModuleUpdateWithoutUserPlanModulesInput, ModuleUncheckedUpdateWithoutUserPlanModulesInput>
    create: XOR<ModuleCreateWithoutUserPlanModulesInput, ModuleUncheckedCreateWithoutUserPlanModulesInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutUserPlanModulesInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutUserPlanModulesInput, ModuleUncheckedUpdateWithoutUserPlanModulesInput>
  }

  export type ModuleUpdateWithoutUserPlanModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModuleUncheckedUpdateWithoutUserPlanModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserPlanModuleCreateManyModuleInput = {
    id?: string
    userId: string
    semesterTag?: string | null
    colorTag?: string | null
    completed?: boolean
  }

  export type UserPlanModuleUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    semesterTag?: NullableStringFieldUpdateOperationsInput | string | null
    colorTag?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPlanModuleUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    semesterTag?: NullableStringFieldUpdateOperationsInput | string | null
    colorTag?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPlanModuleUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    semesterTag?: NullableStringFieldUpdateOperationsInput | string | null
    colorTag?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}