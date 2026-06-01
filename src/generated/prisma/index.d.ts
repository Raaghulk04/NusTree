
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
 * Model DegreePreset
 * 
 */
export type DegreePreset = $Result.DefaultSelection<Prisma.$DegreePresetPayload>
/**
 * Model DegreePresetModule
 * 
 */
export type DegreePresetModule = $Result.DefaultSelection<Prisma.$DegreePresetModulePayload>
/**
 * Model UserPlanModule
 * 
 */
export type UserPlanModule = $Result.DefaultSelection<Prisma.$UserPlanModulePayload>
/**
 * Model UserPreset
 * 
 */
export type UserPreset = $Result.DefaultSelection<Prisma.$UserPresetPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

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
   * `prisma.degreePreset`: Exposes CRUD operations for the **DegreePreset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DegreePresets
    * const degreePresets = await prisma.degreePreset.findMany()
    * ```
    */
  get degreePreset(): Prisma.DegreePresetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.degreePresetModule`: Exposes CRUD operations for the **DegreePresetModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DegreePresetModules
    * const degreePresetModules = await prisma.degreePresetModule.findMany()
    * ```
    */
  get degreePresetModule(): Prisma.DegreePresetModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPlanModule`: Exposes CRUD operations for the **UserPlanModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPlanModules
    * const userPlanModules = await prisma.userPlanModule.findMany()
    * ```
    */
  get userPlanModule(): Prisma.UserPlanModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreset`: Exposes CRUD operations for the **UserPreset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPresets
    * const userPresets = await prisma.userPreset.findMany()
    * ```
    */
  get userPreset(): Prisma.UserPresetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
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
    DegreePreset: 'DegreePreset',
    DegreePresetModule: 'DegreePresetModule',
    UserPlanModule: 'UserPlanModule',
    UserPreset: 'UserPreset',
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
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
      modelProps: "module" | "degreePreset" | "degreePresetModule" | "userPlanModule" | "userPreset" | "user" | "session" | "account" | "verification"
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
      DegreePreset: {
        payload: Prisma.$DegreePresetPayload<ExtArgs>
        fields: Prisma.DegreePresetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DegreePresetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DegreePresetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetPayload>
          }
          findFirst: {
            args: Prisma.DegreePresetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DegreePresetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetPayload>
          }
          findMany: {
            args: Prisma.DegreePresetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetPayload>[]
          }
          create: {
            args: Prisma.DegreePresetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetPayload>
          }
          createMany: {
            args: Prisma.DegreePresetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DegreePresetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetPayload>[]
          }
          delete: {
            args: Prisma.DegreePresetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetPayload>
          }
          update: {
            args: Prisma.DegreePresetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetPayload>
          }
          deleteMany: {
            args: Prisma.DegreePresetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DegreePresetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DegreePresetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetPayload>[]
          }
          upsert: {
            args: Prisma.DegreePresetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetPayload>
          }
          aggregate: {
            args: Prisma.DegreePresetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDegreePreset>
          }
          groupBy: {
            args: Prisma.DegreePresetGroupByArgs<ExtArgs>
            result: $Utils.Optional<DegreePresetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DegreePresetCountArgs<ExtArgs>
            result: $Utils.Optional<DegreePresetCountAggregateOutputType> | number
          }
        }
      }
      DegreePresetModule: {
        payload: Prisma.$DegreePresetModulePayload<ExtArgs>
        fields: Prisma.DegreePresetModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DegreePresetModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DegreePresetModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetModulePayload>
          }
          findFirst: {
            args: Prisma.DegreePresetModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DegreePresetModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetModulePayload>
          }
          findMany: {
            args: Prisma.DegreePresetModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetModulePayload>[]
          }
          create: {
            args: Prisma.DegreePresetModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetModulePayload>
          }
          createMany: {
            args: Prisma.DegreePresetModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DegreePresetModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetModulePayload>[]
          }
          delete: {
            args: Prisma.DegreePresetModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetModulePayload>
          }
          update: {
            args: Prisma.DegreePresetModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetModulePayload>
          }
          deleteMany: {
            args: Prisma.DegreePresetModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DegreePresetModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DegreePresetModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetModulePayload>[]
          }
          upsert: {
            args: Prisma.DegreePresetModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePresetModulePayload>
          }
          aggregate: {
            args: Prisma.DegreePresetModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDegreePresetModule>
          }
          groupBy: {
            args: Prisma.DegreePresetModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DegreePresetModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DegreePresetModuleCountArgs<ExtArgs>
            result: $Utils.Optional<DegreePresetModuleCountAggregateOutputType> | number
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
      UserPreset: {
        payload: Prisma.$UserPresetPayload<ExtArgs>
        fields: Prisma.UserPresetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPresetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPresetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresetPayload>
          }
          findFirst: {
            args: Prisma.UserPresetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPresetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresetPayload>
          }
          findMany: {
            args: Prisma.UserPresetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresetPayload>[]
          }
          create: {
            args: Prisma.UserPresetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresetPayload>
          }
          createMany: {
            args: Prisma.UserPresetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPresetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresetPayload>[]
          }
          delete: {
            args: Prisma.UserPresetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresetPayload>
          }
          update: {
            args: Prisma.UserPresetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresetPayload>
          }
          deleteMany: {
            args: Prisma.UserPresetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPresetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPresetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresetPayload>[]
          }
          upsert: {
            args: Prisma.UserPresetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresetPayload>
          }
          aggregate: {
            args: Prisma.UserPresetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreset>
          }
          groupBy: {
            args: Prisma.UserPresetGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPresetGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPresetCountArgs<ExtArgs>
            result: $Utils.Optional<UserPresetCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
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
    degreePreset?: DegreePresetOmit
    degreePresetModule?: DegreePresetModuleOmit
    userPlanModule?: UserPlanModuleOmit
    userPreset?: UserPresetOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
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
    degreePresetLinks: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPlanModules?: boolean | ModuleCountOutputTypeCountUserPlanModulesArgs
    degreePresetLinks?: boolean | ModuleCountOutputTypeCountDegreePresetLinksArgs
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
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountDegreePresetLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DegreePresetModuleWhereInput
  }


  /**
   * Count Type DegreePresetCountOutputType
   */

  export type DegreePresetCountOutputType = {
    userPlanModules: number
    moduleLinks: number
    userPresets: number
  }

  export type DegreePresetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPlanModules?: boolean | DegreePresetCountOutputTypeCountUserPlanModulesArgs
    moduleLinks?: boolean | DegreePresetCountOutputTypeCountModuleLinksArgs
    userPresets?: boolean | DegreePresetCountOutputTypeCountUserPresetsArgs
  }

  // Custom InputTypes
  /**
   * DegreePresetCountOutputType without action
   */
  export type DegreePresetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetCountOutputType
     */
    select?: DegreePresetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DegreePresetCountOutputType without action
   */
  export type DegreePresetCountOutputTypeCountUserPlanModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlanModuleWhereInput
  }

  /**
   * DegreePresetCountOutputType without action
   */
  export type DegreePresetCountOutputTypeCountModuleLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DegreePresetModuleWhereInput
  }

  /**
   * DegreePresetCountOutputType without action
   */
  export type DegreePresetCountOutputTypeCountUserPresetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPresetWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    userPlanModules: number
    userPresets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    userPlanModules?: boolean | UserCountOutputTypeCountUserPlanModulesArgs
    userPresets?: boolean | UserCountOutputTypeCountUserPresetsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPlanModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlanModuleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPresetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPresetWhereInput
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
    preclusion: string | null
    prerequisite: string | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    department: string | null
    workload: number | null
    preclusion: string | null
    prerequisite: string | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    title: number
    description: number
    department: number
    workload: number
    prereqTree: number
    preclusion: number
    prerequisite: number
    fulfillreqs: number
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
    preclusion?: true
    prerequisite?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    department?: true
    workload?: true
    preclusion?: true
    prerequisite?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    department?: true
    workload?: true
    prereqTree?: true
    preclusion?: true
    prerequisite?: true
    fulfillreqs?: true
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
    preclusion: string | null
    prerequisite: string | null
    fulfillreqs: string[]
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
    preclusion?: boolean
    prerequisite?: boolean
    fulfillreqs?: boolean
    userPlanModules?: boolean | Module$userPlanModulesArgs<ExtArgs>
    degreePresetLinks?: boolean | Module$degreePresetLinksArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    department?: boolean
    workload?: boolean
    prereqTree?: boolean
    preclusion?: boolean
    prerequisite?: boolean
    fulfillreqs?: boolean
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    department?: boolean
    workload?: boolean
    prereqTree?: boolean
    preclusion?: boolean
    prerequisite?: boolean
    fulfillreqs?: boolean
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    department?: boolean
    workload?: boolean
    prereqTree?: boolean
    preclusion?: boolean
    prerequisite?: boolean
    fulfillreqs?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "department" | "workload" | "prereqTree" | "preclusion" | "prerequisite" | "fulfillreqs", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPlanModules?: boolean | Module$userPlanModulesArgs<ExtArgs>
    degreePresetLinks?: boolean | Module$degreePresetLinksArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      userPlanModules: Prisma.$UserPlanModulePayload<ExtArgs>[]
      degreePresetLinks: Prisma.$DegreePresetModulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      department: string | null
      workload: number | null
      prereqTree: Prisma.JsonValue | null
      preclusion: string | null
      prerequisite: string | null
      fulfillreqs: string[]
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
    degreePresetLinks<T extends Module$degreePresetLinksArgs<ExtArgs> = {}>(args?: Subset<T, Module$degreePresetLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly preclusion: FieldRef<"Module", 'String'>
    readonly prerequisite: FieldRef<"Module", 'String'>
    readonly fulfillreqs: FieldRef<"Module", 'String[]'>
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
   * Module.degreePresetLinks
   */
  export type Module$degreePresetLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleInclude<ExtArgs> | null
    where?: DegreePresetModuleWhereInput
    orderBy?: DegreePresetModuleOrderByWithRelationInput | DegreePresetModuleOrderByWithRelationInput[]
    cursor?: DegreePresetModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DegreePresetModuleScalarFieldEnum | DegreePresetModuleScalarFieldEnum[]
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
   * Model DegreePreset
   */

  export type AggregateDegreePreset = {
    _count: DegreePresetCountAggregateOutputType | null
    _min: DegreePresetMinAggregateOutputType | null
    _max: DegreePresetMaxAggregateOutputType | null
  }

  export type DegreePresetMinAggregateOutputType = {
    id: string | null
    degreeCode: string | null
    degreeName: string | null
  }

  export type DegreePresetMaxAggregateOutputType = {
    id: string | null
    degreeCode: string | null
    degreeName: string | null
  }

  export type DegreePresetCountAggregateOutputType = {
    id: number
    degreeCode: number
    degreeName: number
    _all: number
  }


  export type DegreePresetMinAggregateInputType = {
    id?: true
    degreeCode?: true
    degreeName?: true
  }

  export type DegreePresetMaxAggregateInputType = {
    id?: true
    degreeCode?: true
    degreeName?: true
  }

  export type DegreePresetCountAggregateInputType = {
    id?: true
    degreeCode?: true
    degreeName?: true
    _all?: true
  }

  export type DegreePresetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DegreePreset to aggregate.
     */
    where?: DegreePresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DegreePresets to fetch.
     */
    orderBy?: DegreePresetOrderByWithRelationInput | DegreePresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DegreePresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DegreePresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DegreePresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DegreePresets
    **/
    _count?: true | DegreePresetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DegreePresetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DegreePresetMaxAggregateInputType
  }

  export type GetDegreePresetAggregateType<T extends DegreePresetAggregateArgs> = {
        [P in keyof T & keyof AggregateDegreePreset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDegreePreset[P]>
      : GetScalarType<T[P], AggregateDegreePreset[P]>
  }




  export type DegreePresetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DegreePresetWhereInput
    orderBy?: DegreePresetOrderByWithAggregationInput | DegreePresetOrderByWithAggregationInput[]
    by: DegreePresetScalarFieldEnum[] | DegreePresetScalarFieldEnum
    having?: DegreePresetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DegreePresetCountAggregateInputType | true
    _min?: DegreePresetMinAggregateInputType
    _max?: DegreePresetMaxAggregateInputType
  }

  export type DegreePresetGroupByOutputType = {
    id: string
    degreeCode: string
    degreeName: string
    _count: DegreePresetCountAggregateOutputType | null
    _min: DegreePresetMinAggregateOutputType | null
    _max: DegreePresetMaxAggregateOutputType | null
  }

  type GetDegreePresetGroupByPayload<T extends DegreePresetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DegreePresetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DegreePresetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DegreePresetGroupByOutputType[P]>
            : GetScalarType<T[P], DegreePresetGroupByOutputType[P]>
        }
      >
    >


  export type DegreePresetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    degreeCode?: boolean
    degreeName?: boolean
    userPlanModules?: boolean | DegreePreset$userPlanModulesArgs<ExtArgs>
    moduleLinks?: boolean | DegreePreset$moduleLinksArgs<ExtArgs>
    userPresets?: boolean | DegreePreset$userPresetsArgs<ExtArgs>
    _count?: boolean | DegreePresetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["degreePreset"]>

  export type DegreePresetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    degreeCode?: boolean
    degreeName?: boolean
  }, ExtArgs["result"]["degreePreset"]>

  export type DegreePresetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    degreeCode?: boolean
    degreeName?: boolean
  }, ExtArgs["result"]["degreePreset"]>

  export type DegreePresetSelectScalar = {
    id?: boolean
    degreeCode?: boolean
    degreeName?: boolean
  }

  export type DegreePresetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "degreeCode" | "degreeName", ExtArgs["result"]["degreePreset"]>
  export type DegreePresetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPlanModules?: boolean | DegreePreset$userPlanModulesArgs<ExtArgs>
    moduleLinks?: boolean | DegreePreset$moduleLinksArgs<ExtArgs>
    userPresets?: boolean | DegreePreset$userPresetsArgs<ExtArgs>
    _count?: boolean | DegreePresetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DegreePresetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DegreePresetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DegreePresetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DegreePreset"
    objects: {
      userPlanModules: Prisma.$UserPlanModulePayload<ExtArgs>[]
      moduleLinks: Prisma.$DegreePresetModulePayload<ExtArgs>[]
      userPresets: Prisma.$UserPresetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      degreeCode: string
      degreeName: string
    }, ExtArgs["result"]["degreePreset"]>
    composites: {}
  }

  type DegreePresetGetPayload<S extends boolean | null | undefined | DegreePresetDefaultArgs> = $Result.GetResult<Prisma.$DegreePresetPayload, S>

  type DegreePresetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DegreePresetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DegreePresetCountAggregateInputType | true
    }

  export interface DegreePresetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DegreePreset'], meta: { name: 'DegreePreset' } }
    /**
     * Find zero or one DegreePreset that matches the filter.
     * @param {DegreePresetFindUniqueArgs} args - Arguments to find a DegreePreset
     * @example
     * // Get one DegreePreset
     * const degreePreset = await prisma.degreePreset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DegreePresetFindUniqueArgs>(args: SelectSubset<T, DegreePresetFindUniqueArgs<ExtArgs>>): Prisma__DegreePresetClient<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DegreePreset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DegreePresetFindUniqueOrThrowArgs} args - Arguments to find a DegreePreset
     * @example
     * // Get one DegreePreset
     * const degreePreset = await prisma.degreePreset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DegreePresetFindUniqueOrThrowArgs>(args: SelectSubset<T, DegreePresetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DegreePresetClient<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DegreePreset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetFindFirstArgs} args - Arguments to find a DegreePreset
     * @example
     * // Get one DegreePreset
     * const degreePreset = await prisma.degreePreset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DegreePresetFindFirstArgs>(args?: SelectSubset<T, DegreePresetFindFirstArgs<ExtArgs>>): Prisma__DegreePresetClient<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DegreePreset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetFindFirstOrThrowArgs} args - Arguments to find a DegreePreset
     * @example
     * // Get one DegreePreset
     * const degreePreset = await prisma.degreePreset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DegreePresetFindFirstOrThrowArgs>(args?: SelectSubset<T, DegreePresetFindFirstOrThrowArgs<ExtArgs>>): Prisma__DegreePresetClient<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DegreePresets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DegreePresets
     * const degreePresets = await prisma.degreePreset.findMany()
     * 
     * // Get first 10 DegreePresets
     * const degreePresets = await prisma.degreePreset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const degreePresetWithIdOnly = await prisma.degreePreset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DegreePresetFindManyArgs>(args?: SelectSubset<T, DegreePresetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DegreePreset.
     * @param {DegreePresetCreateArgs} args - Arguments to create a DegreePreset.
     * @example
     * // Create one DegreePreset
     * const DegreePreset = await prisma.degreePreset.create({
     *   data: {
     *     // ... data to create a DegreePreset
     *   }
     * })
     * 
     */
    create<T extends DegreePresetCreateArgs>(args: SelectSubset<T, DegreePresetCreateArgs<ExtArgs>>): Prisma__DegreePresetClient<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DegreePresets.
     * @param {DegreePresetCreateManyArgs} args - Arguments to create many DegreePresets.
     * @example
     * // Create many DegreePresets
     * const degreePreset = await prisma.degreePreset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DegreePresetCreateManyArgs>(args?: SelectSubset<T, DegreePresetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DegreePresets and returns the data saved in the database.
     * @param {DegreePresetCreateManyAndReturnArgs} args - Arguments to create many DegreePresets.
     * @example
     * // Create many DegreePresets
     * const degreePreset = await prisma.degreePreset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DegreePresets and only return the `id`
     * const degreePresetWithIdOnly = await prisma.degreePreset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DegreePresetCreateManyAndReturnArgs>(args?: SelectSubset<T, DegreePresetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DegreePreset.
     * @param {DegreePresetDeleteArgs} args - Arguments to delete one DegreePreset.
     * @example
     * // Delete one DegreePreset
     * const DegreePreset = await prisma.degreePreset.delete({
     *   where: {
     *     // ... filter to delete one DegreePreset
     *   }
     * })
     * 
     */
    delete<T extends DegreePresetDeleteArgs>(args: SelectSubset<T, DegreePresetDeleteArgs<ExtArgs>>): Prisma__DegreePresetClient<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DegreePreset.
     * @param {DegreePresetUpdateArgs} args - Arguments to update one DegreePreset.
     * @example
     * // Update one DegreePreset
     * const degreePreset = await prisma.degreePreset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DegreePresetUpdateArgs>(args: SelectSubset<T, DegreePresetUpdateArgs<ExtArgs>>): Prisma__DegreePresetClient<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DegreePresets.
     * @param {DegreePresetDeleteManyArgs} args - Arguments to filter DegreePresets to delete.
     * @example
     * // Delete a few DegreePresets
     * const { count } = await prisma.degreePreset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DegreePresetDeleteManyArgs>(args?: SelectSubset<T, DegreePresetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DegreePresets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DegreePresets
     * const degreePreset = await prisma.degreePreset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DegreePresetUpdateManyArgs>(args: SelectSubset<T, DegreePresetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DegreePresets and returns the data updated in the database.
     * @param {DegreePresetUpdateManyAndReturnArgs} args - Arguments to update many DegreePresets.
     * @example
     * // Update many DegreePresets
     * const degreePreset = await prisma.degreePreset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DegreePresets and only return the `id`
     * const degreePresetWithIdOnly = await prisma.degreePreset.updateManyAndReturn({
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
    updateManyAndReturn<T extends DegreePresetUpdateManyAndReturnArgs>(args: SelectSubset<T, DegreePresetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DegreePreset.
     * @param {DegreePresetUpsertArgs} args - Arguments to update or create a DegreePreset.
     * @example
     * // Update or create a DegreePreset
     * const degreePreset = await prisma.degreePreset.upsert({
     *   create: {
     *     // ... data to create a DegreePreset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DegreePreset we want to update
     *   }
     * })
     */
    upsert<T extends DegreePresetUpsertArgs>(args: SelectSubset<T, DegreePresetUpsertArgs<ExtArgs>>): Prisma__DegreePresetClient<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DegreePresets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetCountArgs} args - Arguments to filter DegreePresets to count.
     * @example
     * // Count the number of DegreePresets
     * const count = await prisma.degreePreset.count({
     *   where: {
     *     // ... the filter for the DegreePresets we want to count
     *   }
     * })
    **/
    count<T extends DegreePresetCountArgs>(
      args?: Subset<T, DegreePresetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DegreePresetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DegreePreset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DegreePresetAggregateArgs>(args: Subset<T, DegreePresetAggregateArgs>): Prisma.PrismaPromise<GetDegreePresetAggregateType<T>>

    /**
     * Group by DegreePreset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetGroupByArgs} args - Group by arguments.
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
      T extends DegreePresetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DegreePresetGroupByArgs['orderBy'] }
        : { orderBy?: DegreePresetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DegreePresetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDegreePresetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DegreePreset model
   */
  readonly fields: DegreePresetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DegreePreset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DegreePresetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userPlanModules<T extends DegreePreset$userPlanModulesArgs<ExtArgs> = {}>(args?: Subset<T, DegreePreset$userPlanModulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moduleLinks<T extends DegreePreset$moduleLinksArgs<ExtArgs> = {}>(args?: Subset<T, DegreePreset$moduleLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPresets<T extends DegreePreset$userPresetsArgs<ExtArgs> = {}>(args?: Subset<T, DegreePreset$userPresetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DegreePreset model
   */
  interface DegreePresetFieldRefs {
    readonly id: FieldRef<"DegreePreset", 'String'>
    readonly degreeCode: FieldRef<"DegreePreset", 'String'>
    readonly degreeName: FieldRef<"DegreePreset", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DegreePreset findUnique
   */
  export type DegreePresetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetInclude<ExtArgs> | null
    /**
     * Filter, which DegreePreset to fetch.
     */
    where: DegreePresetWhereUniqueInput
  }

  /**
   * DegreePreset findUniqueOrThrow
   */
  export type DegreePresetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetInclude<ExtArgs> | null
    /**
     * Filter, which DegreePreset to fetch.
     */
    where: DegreePresetWhereUniqueInput
  }

  /**
   * DegreePreset findFirst
   */
  export type DegreePresetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetInclude<ExtArgs> | null
    /**
     * Filter, which DegreePreset to fetch.
     */
    where?: DegreePresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DegreePresets to fetch.
     */
    orderBy?: DegreePresetOrderByWithRelationInput | DegreePresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DegreePresets.
     */
    cursor?: DegreePresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DegreePresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DegreePresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DegreePresets.
     */
    distinct?: DegreePresetScalarFieldEnum | DegreePresetScalarFieldEnum[]
  }

  /**
   * DegreePreset findFirstOrThrow
   */
  export type DegreePresetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetInclude<ExtArgs> | null
    /**
     * Filter, which DegreePreset to fetch.
     */
    where?: DegreePresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DegreePresets to fetch.
     */
    orderBy?: DegreePresetOrderByWithRelationInput | DegreePresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DegreePresets.
     */
    cursor?: DegreePresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DegreePresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DegreePresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DegreePresets.
     */
    distinct?: DegreePresetScalarFieldEnum | DegreePresetScalarFieldEnum[]
  }

  /**
   * DegreePreset findMany
   */
  export type DegreePresetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetInclude<ExtArgs> | null
    /**
     * Filter, which DegreePresets to fetch.
     */
    where?: DegreePresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DegreePresets to fetch.
     */
    orderBy?: DegreePresetOrderByWithRelationInput | DegreePresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DegreePresets.
     */
    cursor?: DegreePresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DegreePresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DegreePresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DegreePresets.
     */
    distinct?: DegreePresetScalarFieldEnum | DegreePresetScalarFieldEnum[]
  }

  /**
   * DegreePreset create
   */
  export type DegreePresetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetInclude<ExtArgs> | null
    /**
     * The data needed to create a DegreePreset.
     */
    data: XOR<DegreePresetCreateInput, DegreePresetUncheckedCreateInput>
  }

  /**
   * DegreePreset createMany
   */
  export type DegreePresetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DegreePresets.
     */
    data: DegreePresetCreateManyInput | DegreePresetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DegreePreset createManyAndReturn
   */
  export type DegreePresetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * The data used to create many DegreePresets.
     */
    data: DegreePresetCreateManyInput | DegreePresetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DegreePreset update
   */
  export type DegreePresetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetInclude<ExtArgs> | null
    /**
     * The data needed to update a DegreePreset.
     */
    data: XOR<DegreePresetUpdateInput, DegreePresetUncheckedUpdateInput>
    /**
     * Choose, which DegreePreset to update.
     */
    where: DegreePresetWhereUniqueInput
  }

  /**
   * DegreePreset updateMany
   */
  export type DegreePresetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DegreePresets.
     */
    data: XOR<DegreePresetUpdateManyMutationInput, DegreePresetUncheckedUpdateManyInput>
    /**
     * Filter which DegreePresets to update
     */
    where?: DegreePresetWhereInput
    /**
     * Limit how many DegreePresets to update.
     */
    limit?: number
  }

  /**
   * DegreePreset updateManyAndReturn
   */
  export type DegreePresetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * The data used to update DegreePresets.
     */
    data: XOR<DegreePresetUpdateManyMutationInput, DegreePresetUncheckedUpdateManyInput>
    /**
     * Filter which DegreePresets to update
     */
    where?: DegreePresetWhereInput
    /**
     * Limit how many DegreePresets to update.
     */
    limit?: number
  }

  /**
   * DegreePreset upsert
   */
  export type DegreePresetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetInclude<ExtArgs> | null
    /**
     * The filter to search for the DegreePreset to update in case it exists.
     */
    where: DegreePresetWhereUniqueInput
    /**
     * In case the DegreePreset found by the `where` argument doesn't exist, create a new DegreePreset with this data.
     */
    create: XOR<DegreePresetCreateInput, DegreePresetUncheckedCreateInput>
    /**
     * In case the DegreePreset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DegreePresetUpdateInput, DegreePresetUncheckedUpdateInput>
  }

  /**
   * DegreePreset delete
   */
  export type DegreePresetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetInclude<ExtArgs> | null
    /**
     * Filter which DegreePreset to delete.
     */
    where: DegreePresetWhereUniqueInput
  }

  /**
   * DegreePreset deleteMany
   */
  export type DegreePresetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DegreePresets to delete
     */
    where?: DegreePresetWhereInput
    /**
     * Limit how many DegreePresets to delete.
     */
    limit?: number
  }

  /**
   * DegreePreset.userPlanModules
   */
  export type DegreePreset$userPlanModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * DegreePreset.moduleLinks
   */
  export type DegreePreset$moduleLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleInclude<ExtArgs> | null
    where?: DegreePresetModuleWhereInput
    orderBy?: DegreePresetModuleOrderByWithRelationInput | DegreePresetModuleOrderByWithRelationInput[]
    cursor?: DegreePresetModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DegreePresetModuleScalarFieldEnum | DegreePresetModuleScalarFieldEnum[]
  }

  /**
   * DegreePreset.userPresets
   */
  export type DegreePreset$userPresetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetInclude<ExtArgs> | null
    where?: UserPresetWhereInput
    orderBy?: UserPresetOrderByWithRelationInput | UserPresetOrderByWithRelationInput[]
    cursor?: UserPresetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPresetScalarFieldEnum | UserPresetScalarFieldEnum[]
  }

  /**
   * DegreePreset without action
   */
  export type DegreePresetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetInclude<ExtArgs> | null
  }


  /**
   * Model DegreePresetModule
   */

  export type AggregateDegreePresetModule = {
    _count: DegreePresetModuleCountAggregateOutputType | null
    _min: DegreePresetModuleMinAggregateOutputType | null
    _max: DegreePresetModuleMaxAggregateOutputType | null
  }

  export type DegreePresetModuleMinAggregateOutputType = {
    degreePresetId: string | null
    moduleId: string | null
  }

  export type DegreePresetModuleMaxAggregateOutputType = {
    degreePresetId: string | null
    moduleId: string | null
  }

  export type DegreePresetModuleCountAggregateOutputType = {
    degreePresetId: number
    moduleId: number
    _all: number
  }


  export type DegreePresetModuleMinAggregateInputType = {
    degreePresetId?: true
    moduleId?: true
  }

  export type DegreePresetModuleMaxAggregateInputType = {
    degreePresetId?: true
    moduleId?: true
  }

  export type DegreePresetModuleCountAggregateInputType = {
    degreePresetId?: true
    moduleId?: true
    _all?: true
  }

  export type DegreePresetModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DegreePresetModule to aggregate.
     */
    where?: DegreePresetModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DegreePresetModules to fetch.
     */
    orderBy?: DegreePresetModuleOrderByWithRelationInput | DegreePresetModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DegreePresetModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DegreePresetModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DegreePresetModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DegreePresetModules
    **/
    _count?: true | DegreePresetModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DegreePresetModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DegreePresetModuleMaxAggregateInputType
  }

  export type GetDegreePresetModuleAggregateType<T extends DegreePresetModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateDegreePresetModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDegreePresetModule[P]>
      : GetScalarType<T[P], AggregateDegreePresetModule[P]>
  }




  export type DegreePresetModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DegreePresetModuleWhereInput
    orderBy?: DegreePresetModuleOrderByWithAggregationInput | DegreePresetModuleOrderByWithAggregationInput[]
    by: DegreePresetModuleScalarFieldEnum[] | DegreePresetModuleScalarFieldEnum
    having?: DegreePresetModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DegreePresetModuleCountAggregateInputType | true
    _min?: DegreePresetModuleMinAggregateInputType
    _max?: DegreePresetModuleMaxAggregateInputType
  }

  export type DegreePresetModuleGroupByOutputType = {
    degreePresetId: string
    moduleId: string
    _count: DegreePresetModuleCountAggregateOutputType | null
    _min: DegreePresetModuleMinAggregateOutputType | null
    _max: DegreePresetModuleMaxAggregateOutputType | null
  }

  type GetDegreePresetModuleGroupByPayload<T extends DegreePresetModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DegreePresetModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DegreePresetModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DegreePresetModuleGroupByOutputType[P]>
            : GetScalarType<T[P], DegreePresetModuleGroupByOutputType[P]>
        }
      >
    >


  export type DegreePresetModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    degreePresetId?: boolean
    moduleId?: boolean
    degreePreset?: boolean | DegreePresetDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["degreePresetModule"]>

  export type DegreePresetModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    degreePresetId?: boolean
    moduleId?: boolean
    degreePreset?: boolean | DegreePresetDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["degreePresetModule"]>

  export type DegreePresetModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    degreePresetId?: boolean
    moduleId?: boolean
    degreePreset?: boolean | DegreePresetDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["degreePresetModule"]>

  export type DegreePresetModuleSelectScalar = {
    degreePresetId?: boolean
    moduleId?: boolean
  }

  export type DegreePresetModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"degreePresetId" | "moduleId", ExtArgs["result"]["degreePresetModule"]>
  export type DegreePresetModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    degreePreset?: boolean | DegreePresetDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type DegreePresetModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    degreePreset?: boolean | DegreePresetDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type DegreePresetModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    degreePreset?: boolean | DegreePresetDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $DegreePresetModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DegreePresetModule"
    objects: {
      degreePreset: Prisma.$DegreePresetPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      degreePresetId: string
      moduleId: string
    }, ExtArgs["result"]["degreePresetModule"]>
    composites: {}
  }

  type DegreePresetModuleGetPayload<S extends boolean | null | undefined | DegreePresetModuleDefaultArgs> = $Result.GetResult<Prisma.$DegreePresetModulePayload, S>

  type DegreePresetModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DegreePresetModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DegreePresetModuleCountAggregateInputType | true
    }

  export interface DegreePresetModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DegreePresetModule'], meta: { name: 'DegreePresetModule' } }
    /**
     * Find zero or one DegreePresetModule that matches the filter.
     * @param {DegreePresetModuleFindUniqueArgs} args - Arguments to find a DegreePresetModule
     * @example
     * // Get one DegreePresetModule
     * const degreePresetModule = await prisma.degreePresetModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DegreePresetModuleFindUniqueArgs>(args: SelectSubset<T, DegreePresetModuleFindUniqueArgs<ExtArgs>>): Prisma__DegreePresetModuleClient<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DegreePresetModule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DegreePresetModuleFindUniqueOrThrowArgs} args - Arguments to find a DegreePresetModule
     * @example
     * // Get one DegreePresetModule
     * const degreePresetModule = await prisma.degreePresetModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DegreePresetModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, DegreePresetModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DegreePresetModuleClient<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DegreePresetModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetModuleFindFirstArgs} args - Arguments to find a DegreePresetModule
     * @example
     * // Get one DegreePresetModule
     * const degreePresetModule = await prisma.degreePresetModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DegreePresetModuleFindFirstArgs>(args?: SelectSubset<T, DegreePresetModuleFindFirstArgs<ExtArgs>>): Prisma__DegreePresetModuleClient<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DegreePresetModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetModuleFindFirstOrThrowArgs} args - Arguments to find a DegreePresetModule
     * @example
     * // Get one DegreePresetModule
     * const degreePresetModule = await prisma.degreePresetModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DegreePresetModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, DegreePresetModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DegreePresetModuleClient<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DegreePresetModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DegreePresetModules
     * const degreePresetModules = await prisma.degreePresetModule.findMany()
     * 
     * // Get first 10 DegreePresetModules
     * const degreePresetModules = await prisma.degreePresetModule.findMany({ take: 10 })
     * 
     * // Only select the `degreePresetId`
     * const degreePresetModuleWithDegreePresetIdOnly = await prisma.degreePresetModule.findMany({ select: { degreePresetId: true } })
     * 
     */
    findMany<T extends DegreePresetModuleFindManyArgs>(args?: SelectSubset<T, DegreePresetModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DegreePresetModule.
     * @param {DegreePresetModuleCreateArgs} args - Arguments to create a DegreePresetModule.
     * @example
     * // Create one DegreePresetModule
     * const DegreePresetModule = await prisma.degreePresetModule.create({
     *   data: {
     *     // ... data to create a DegreePresetModule
     *   }
     * })
     * 
     */
    create<T extends DegreePresetModuleCreateArgs>(args: SelectSubset<T, DegreePresetModuleCreateArgs<ExtArgs>>): Prisma__DegreePresetModuleClient<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DegreePresetModules.
     * @param {DegreePresetModuleCreateManyArgs} args - Arguments to create many DegreePresetModules.
     * @example
     * // Create many DegreePresetModules
     * const degreePresetModule = await prisma.degreePresetModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DegreePresetModuleCreateManyArgs>(args?: SelectSubset<T, DegreePresetModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DegreePresetModules and returns the data saved in the database.
     * @param {DegreePresetModuleCreateManyAndReturnArgs} args - Arguments to create many DegreePresetModules.
     * @example
     * // Create many DegreePresetModules
     * const degreePresetModule = await prisma.degreePresetModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DegreePresetModules and only return the `degreePresetId`
     * const degreePresetModuleWithDegreePresetIdOnly = await prisma.degreePresetModule.createManyAndReturn({
     *   select: { degreePresetId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DegreePresetModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, DegreePresetModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DegreePresetModule.
     * @param {DegreePresetModuleDeleteArgs} args - Arguments to delete one DegreePresetModule.
     * @example
     * // Delete one DegreePresetModule
     * const DegreePresetModule = await prisma.degreePresetModule.delete({
     *   where: {
     *     // ... filter to delete one DegreePresetModule
     *   }
     * })
     * 
     */
    delete<T extends DegreePresetModuleDeleteArgs>(args: SelectSubset<T, DegreePresetModuleDeleteArgs<ExtArgs>>): Prisma__DegreePresetModuleClient<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DegreePresetModule.
     * @param {DegreePresetModuleUpdateArgs} args - Arguments to update one DegreePresetModule.
     * @example
     * // Update one DegreePresetModule
     * const degreePresetModule = await prisma.degreePresetModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DegreePresetModuleUpdateArgs>(args: SelectSubset<T, DegreePresetModuleUpdateArgs<ExtArgs>>): Prisma__DegreePresetModuleClient<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DegreePresetModules.
     * @param {DegreePresetModuleDeleteManyArgs} args - Arguments to filter DegreePresetModules to delete.
     * @example
     * // Delete a few DegreePresetModules
     * const { count } = await prisma.degreePresetModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DegreePresetModuleDeleteManyArgs>(args?: SelectSubset<T, DegreePresetModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DegreePresetModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DegreePresetModules
     * const degreePresetModule = await prisma.degreePresetModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DegreePresetModuleUpdateManyArgs>(args: SelectSubset<T, DegreePresetModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DegreePresetModules and returns the data updated in the database.
     * @param {DegreePresetModuleUpdateManyAndReturnArgs} args - Arguments to update many DegreePresetModules.
     * @example
     * // Update many DegreePresetModules
     * const degreePresetModule = await prisma.degreePresetModule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DegreePresetModules and only return the `degreePresetId`
     * const degreePresetModuleWithDegreePresetIdOnly = await prisma.degreePresetModule.updateManyAndReturn({
     *   select: { degreePresetId: true },
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
    updateManyAndReturn<T extends DegreePresetModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, DegreePresetModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DegreePresetModule.
     * @param {DegreePresetModuleUpsertArgs} args - Arguments to update or create a DegreePresetModule.
     * @example
     * // Update or create a DegreePresetModule
     * const degreePresetModule = await prisma.degreePresetModule.upsert({
     *   create: {
     *     // ... data to create a DegreePresetModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DegreePresetModule we want to update
     *   }
     * })
     */
    upsert<T extends DegreePresetModuleUpsertArgs>(args: SelectSubset<T, DegreePresetModuleUpsertArgs<ExtArgs>>): Prisma__DegreePresetModuleClient<$Result.GetResult<Prisma.$DegreePresetModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DegreePresetModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetModuleCountArgs} args - Arguments to filter DegreePresetModules to count.
     * @example
     * // Count the number of DegreePresetModules
     * const count = await prisma.degreePresetModule.count({
     *   where: {
     *     // ... the filter for the DegreePresetModules we want to count
     *   }
     * })
    **/
    count<T extends DegreePresetModuleCountArgs>(
      args?: Subset<T, DegreePresetModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DegreePresetModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DegreePresetModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DegreePresetModuleAggregateArgs>(args: Subset<T, DegreePresetModuleAggregateArgs>): Prisma.PrismaPromise<GetDegreePresetModuleAggregateType<T>>

    /**
     * Group by DegreePresetModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreePresetModuleGroupByArgs} args - Group by arguments.
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
      T extends DegreePresetModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DegreePresetModuleGroupByArgs['orderBy'] }
        : { orderBy?: DegreePresetModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DegreePresetModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDegreePresetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DegreePresetModule model
   */
  readonly fields: DegreePresetModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DegreePresetModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DegreePresetModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    degreePreset<T extends DegreePresetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DegreePresetDefaultArgs<ExtArgs>>): Prisma__DegreePresetClient<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DegreePresetModule model
   */
  interface DegreePresetModuleFieldRefs {
    readonly degreePresetId: FieldRef<"DegreePresetModule", 'String'>
    readonly moduleId: FieldRef<"DegreePresetModule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DegreePresetModule findUnique
   */
  export type DegreePresetModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleInclude<ExtArgs> | null
    /**
     * Filter, which DegreePresetModule to fetch.
     */
    where: DegreePresetModuleWhereUniqueInput
  }

  /**
   * DegreePresetModule findUniqueOrThrow
   */
  export type DegreePresetModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleInclude<ExtArgs> | null
    /**
     * Filter, which DegreePresetModule to fetch.
     */
    where: DegreePresetModuleWhereUniqueInput
  }

  /**
   * DegreePresetModule findFirst
   */
  export type DegreePresetModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleInclude<ExtArgs> | null
    /**
     * Filter, which DegreePresetModule to fetch.
     */
    where?: DegreePresetModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DegreePresetModules to fetch.
     */
    orderBy?: DegreePresetModuleOrderByWithRelationInput | DegreePresetModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DegreePresetModules.
     */
    cursor?: DegreePresetModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DegreePresetModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DegreePresetModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DegreePresetModules.
     */
    distinct?: DegreePresetModuleScalarFieldEnum | DegreePresetModuleScalarFieldEnum[]
  }

  /**
   * DegreePresetModule findFirstOrThrow
   */
  export type DegreePresetModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleInclude<ExtArgs> | null
    /**
     * Filter, which DegreePresetModule to fetch.
     */
    where?: DegreePresetModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DegreePresetModules to fetch.
     */
    orderBy?: DegreePresetModuleOrderByWithRelationInput | DegreePresetModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DegreePresetModules.
     */
    cursor?: DegreePresetModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DegreePresetModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DegreePresetModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DegreePresetModules.
     */
    distinct?: DegreePresetModuleScalarFieldEnum | DegreePresetModuleScalarFieldEnum[]
  }

  /**
   * DegreePresetModule findMany
   */
  export type DegreePresetModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleInclude<ExtArgs> | null
    /**
     * Filter, which DegreePresetModules to fetch.
     */
    where?: DegreePresetModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DegreePresetModules to fetch.
     */
    orderBy?: DegreePresetModuleOrderByWithRelationInput | DegreePresetModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DegreePresetModules.
     */
    cursor?: DegreePresetModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DegreePresetModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DegreePresetModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DegreePresetModules.
     */
    distinct?: DegreePresetModuleScalarFieldEnum | DegreePresetModuleScalarFieldEnum[]
  }

  /**
   * DegreePresetModule create
   */
  export type DegreePresetModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a DegreePresetModule.
     */
    data: XOR<DegreePresetModuleCreateInput, DegreePresetModuleUncheckedCreateInput>
  }

  /**
   * DegreePresetModule createMany
   */
  export type DegreePresetModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DegreePresetModules.
     */
    data: DegreePresetModuleCreateManyInput | DegreePresetModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DegreePresetModule createManyAndReturn
   */
  export type DegreePresetModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * The data used to create many DegreePresetModules.
     */
    data: DegreePresetModuleCreateManyInput | DegreePresetModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DegreePresetModule update
   */
  export type DegreePresetModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a DegreePresetModule.
     */
    data: XOR<DegreePresetModuleUpdateInput, DegreePresetModuleUncheckedUpdateInput>
    /**
     * Choose, which DegreePresetModule to update.
     */
    where: DegreePresetModuleWhereUniqueInput
  }

  /**
   * DegreePresetModule updateMany
   */
  export type DegreePresetModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DegreePresetModules.
     */
    data: XOR<DegreePresetModuleUpdateManyMutationInput, DegreePresetModuleUncheckedUpdateManyInput>
    /**
     * Filter which DegreePresetModules to update
     */
    where?: DegreePresetModuleWhereInput
    /**
     * Limit how many DegreePresetModules to update.
     */
    limit?: number
  }

  /**
   * DegreePresetModule updateManyAndReturn
   */
  export type DegreePresetModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * The data used to update DegreePresetModules.
     */
    data: XOR<DegreePresetModuleUpdateManyMutationInput, DegreePresetModuleUncheckedUpdateManyInput>
    /**
     * Filter which DegreePresetModules to update
     */
    where?: DegreePresetModuleWhereInput
    /**
     * Limit how many DegreePresetModules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DegreePresetModule upsert
   */
  export type DegreePresetModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the DegreePresetModule to update in case it exists.
     */
    where: DegreePresetModuleWhereUniqueInput
    /**
     * In case the DegreePresetModule found by the `where` argument doesn't exist, create a new DegreePresetModule with this data.
     */
    create: XOR<DegreePresetModuleCreateInput, DegreePresetModuleUncheckedCreateInput>
    /**
     * In case the DegreePresetModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DegreePresetModuleUpdateInput, DegreePresetModuleUncheckedUpdateInput>
  }

  /**
   * DegreePresetModule delete
   */
  export type DegreePresetModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleInclude<ExtArgs> | null
    /**
     * Filter which DegreePresetModule to delete.
     */
    where: DegreePresetModuleWhereUniqueInput
  }

  /**
   * DegreePresetModule deleteMany
   */
  export type DegreePresetModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DegreePresetModules to delete
     */
    where?: DegreePresetModuleWhereInput
    /**
     * Limit how many DegreePresetModules to delete.
     */
    limit?: number
  }

  /**
   * DegreePresetModule without action
   */
  export type DegreePresetModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePresetModule
     */
    select?: DegreePresetModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePresetModule
     */
    omit?: DegreePresetModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetModuleInclude<ExtArgs> | null
  }


  /**
   * Model UserPlanModule
   */

  export type AggregateUserPlanModule = {
    _count: UserPlanModuleCountAggregateOutputType | null
    _avg: UserPlanModuleAvgAggregateOutputType | null
    _sum: UserPlanModuleSumAggregateOutputType | null
    _min: UserPlanModuleMinAggregateOutputType | null
    _max: UserPlanModuleMaxAggregateOutputType | null
  }

  export type UserPlanModuleAvgAggregateOutputType = {
    planYear: number | null
    planSemester: number | null
  }

  export type UserPlanModuleSumAggregateOutputType = {
    planYear: number | null
    planSemester: number | null
  }

  export type UserPlanModuleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    planYear: number | null
    planSemester: number | null
    isPresetModule: boolean | null
    degreePresetId: string | null
  }

  export type UserPlanModuleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    planYear: number | null
    planSemester: number | null
    isPresetModule: boolean | null
    degreePresetId: string | null
  }

  export type UserPlanModuleCountAggregateOutputType = {
    id: number
    userId: number
    moduleId: number
    planYear: number
    planSemester: number
    isPresetModule: number
    degreePresetId: number
    _all: number
  }


  export type UserPlanModuleAvgAggregateInputType = {
    planYear?: true
    planSemester?: true
  }

  export type UserPlanModuleSumAggregateInputType = {
    planYear?: true
    planSemester?: true
  }

  export type UserPlanModuleMinAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    planYear?: true
    planSemester?: true
    isPresetModule?: true
    degreePresetId?: true
  }

  export type UserPlanModuleMaxAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    planYear?: true
    planSemester?: true
    isPresetModule?: true
    degreePresetId?: true
  }

  export type UserPlanModuleCountAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    planYear?: true
    planSemester?: true
    isPresetModule?: true
    degreePresetId?: true
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
     * Select which fields to average
    **/
    _avg?: UserPlanModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPlanModuleSumAggregateInputType
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
    _avg?: UserPlanModuleAvgAggregateInputType
    _sum?: UserPlanModuleSumAggregateInputType
    _min?: UserPlanModuleMinAggregateInputType
    _max?: UserPlanModuleMaxAggregateInputType
  }

  export type UserPlanModuleGroupByOutputType = {
    id: string
    userId: string
    moduleId: string
    planYear: number
    planSemester: number
    isPresetModule: boolean
    degreePresetId: string | null
    _count: UserPlanModuleCountAggregateOutputType | null
    _avg: UserPlanModuleAvgAggregateOutputType | null
    _sum: UserPlanModuleSumAggregateOutputType | null
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
    planYear?: boolean
    planSemester?: boolean
    isPresetModule?: boolean
    degreePresetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    degreePreset?: boolean | UserPlanModule$degreePresetArgs<ExtArgs>
  }, ExtArgs["result"]["userPlanModule"]>

  export type UserPlanModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    planYear?: boolean
    planSemester?: boolean
    isPresetModule?: boolean
    degreePresetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    degreePreset?: boolean | UserPlanModule$degreePresetArgs<ExtArgs>
  }, ExtArgs["result"]["userPlanModule"]>

  export type UserPlanModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    planYear?: boolean
    planSemester?: boolean
    isPresetModule?: boolean
    degreePresetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    degreePreset?: boolean | UserPlanModule$degreePresetArgs<ExtArgs>
  }, ExtArgs["result"]["userPlanModule"]>

  export type UserPlanModuleSelectScalar = {
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    planYear?: boolean
    planSemester?: boolean
    isPresetModule?: boolean
    degreePresetId?: boolean
  }

  export type UserPlanModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "moduleId" | "planYear" | "planSemester" | "isPresetModule" | "degreePresetId", ExtArgs["result"]["userPlanModule"]>
  export type UserPlanModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    degreePreset?: boolean | UserPlanModule$degreePresetArgs<ExtArgs>
  }
  export type UserPlanModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    degreePreset?: boolean | UserPlanModule$degreePresetArgs<ExtArgs>
  }
  export type UserPlanModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    degreePreset?: boolean | UserPlanModule$degreePresetArgs<ExtArgs>
  }

  export type $UserPlanModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPlanModule"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
      degreePreset: Prisma.$DegreePresetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      moduleId: string
      planYear: number
      planSemester: number
      isPresetModule: boolean
      degreePresetId: string | null
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    degreePreset<T extends UserPlanModule$degreePresetArgs<ExtArgs> = {}>(args?: Subset<T, UserPlanModule$degreePresetArgs<ExtArgs>>): Prisma__DegreePresetClient<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly planYear: FieldRef<"UserPlanModule", 'Int'>
    readonly planSemester: FieldRef<"UserPlanModule", 'Int'>
    readonly isPresetModule: FieldRef<"UserPlanModule", 'Boolean'>
    readonly degreePresetId: FieldRef<"UserPlanModule", 'String'>
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
   * UserPlanModule.degreePreset
   */
  export type UserPlanModule$degreePresetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreePreset
     */
    select?: DegreePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreePreset
     */
    omit?: DegreePresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreePresetInclude<ExtArgs> | null
    where?: DegreePresetWhereInput
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
   * Model UserPreset
   */

  export type AggregateUserPreset = {
    _count: UserPresetCountAggregateOutputType | null
    _min: UserPresetMinAggregateOutputType | null
    _max: UserPresetMaxAggregateOutputType | null
  }

  export type UserPresetMinAggregateOutputType = {
    userId: string | null
    degreePresetId: string | null
    importedAt: Date | null
  }

  export type UserPresetMaxAggregateOutputType = {
    userId: string | null
    degreePresetId: string | null
    importedAt: Date | null
  }

  export type UserPresetCountAggregateOutputType = {
    userId: number
    degreePresetId: number
    importedAt: number
    _all: number
  }


  export type UserPresetMinAggregateInputType = {
    userId?: true
    degreePresetId?: true
    importedAt?: true
  }

  export type UserPresetMaxAggregateInputType = {
    userId?: true
    degreePresetId?: true
    importedAt?: true
  }

  export type UserPresetCountAggregateInputType = {
    userId?: true
    degreePresetId?: true
    importedAt?: true
    _all?: true
  }

  export type UserPresetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreset to aggregate.
     */
    where?: UserPresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPresets to fetch.
     */
    orderBy?: UserPresetOrderByWithRelationInput | UserPresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPresets
    **/
    _count?: true | UserPresetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPresetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPresetMaxAggregateInputType
  }

  export type GetUserPresetAggregateType<T extends UserPresetAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreset[P]>
      : GetScalarType<T[P], AggregateUserPreset[P]>
  }




  export type UserPresetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPresetWhereInput
    orderBy?: UserPresetOrderByWithAggregationInput | UserPresetOrderByWithAggregationInput[]
    by: UserPresetScalarFieldEnum[] | UserPresetScalarFieldEnum
    having?: UserPresetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPresetCountAggregateInputType | true
    _min?: UserPresetMinAggregateInputType
    _max?: UserPresetMaxAggregateInputType
  }

  export type UserPresetGroupByOutputType = {
    userId: string
    degreePresetId: string
    importedAt: Date
    _count: UserPresetCountAggregateOutputType | null
    _min: UserPresetMinAggregateOutputType | null
    _max: UserPresetMaxAggregateOutputType | null
  }

  type GetUserPresetGroupByPayload<T extends UserPresetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPresetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPresetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPresetGroupByOutputType[P]>
            : GetScalarType<T[P], UserPresetGroupByOutputType[P]>
        }
      >
    >


  export type UserPresetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    degreePresetId?: boolean
    importedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    degreePreset?: boolean | DegreePresetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreset"]>

  export type UserPresetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    degreePresetId?: boolean
    importedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    degreePreset?: boolean | DegreePresetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreset"]>

  export type UserPresetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    degreePresetId?: boolean
    importedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    degreePreset?: boolean | DegreePresetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreset"]>

  export type UserPresetSelectScalar = {
    userId?: boolean
    degreePresetId?: boolean
    importedAt?: boolean
  }

  export type UserPresetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "degreePresetId" | "importedAt", ExtArgs["result"]["userPreset"]>
  export type UserPresetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    degreePreset?: boolean | DegreePresetDefaultArgs<ExtArgs>
  }
  export type UserPresetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    degreePreset?: boolean | DegreePresetDefaultArgs<ExtArgs>
  }
  export type UserPresetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    degreePreset?: boolean | DegreePresetDefaultArgs<ExtArgs>
  }

  export type $UserPresetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreset"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      degreePreset: Prisma.$DegreePresetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      degreePresetId: string
      importedAt: Date
    }, ExtArgs["result"]["userPreset"]>
    composites: {}
  }

  type UserPresetGetPayload<S extends boolean | null | undefined | UserPresetDefaultArgs> = $Result.GetResult<Prisma.$UserPresetPayload, S>

  type UserPresetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPresetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPresetCountAggregateInputType | true
    }

  export interface UserPresetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreset'], meta: { name: 'UserPreset' } }
    /**
     * Find zero or one UserPreset that matches the filter.
     * @param {UserPresetFindUniqueArgs} args - Arguments to find a UserPreset
     * @example
     * // Get one UserPreset
     * const userPreset = await prisma.userPreset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPresetFindUniqueArgs>(args: SelectSubset<T, UserPresetFindUniqueArgs<ExtArgs>>): Prisma__UserPresetClient<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPresetFindUniqueOrThrowArgs} args - Arguments to find a UserPreset
     * @example
     * // Get one UserPreset
     * const userPreset = await prisma.userPreset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPresetFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPresetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPresetClient<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresetFindFirstArgs} args - Arguments to find a UserPreset
     * @example
     * // Get one UserPreset
     * const userPreset = await prisma.userPreset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPresetFindFirstArgs>(args?: SelectSubset<T, UserPresetFindFirstArgs<ExtArgs>>): Prisma__UserPresetClient<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresetFindFirstOrThrowArgs} args - Arguments to find a UserPreset
     * @example
     * // Get one UserPreset
     * const userPreset = await prisma.userPreset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPresetFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPresetFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPresetClient<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPresets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPresets
     * const userPresets = await prisma.userPreset.findMany()
     * 
     * // Get first 10 UserPresets
     * const userPresets = await prisma.userPreset.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userPresetWithUserIdOnly = await prisma.userPreset.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserPresetFindManyArgs>(args?: SelectSubset<T, UserPresetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreset.
     * @param {UserPresetCreateArgs} args - Arguments to create a UserPreset.
     * @example
     * // Create one UserPreset
     * const UserPreset = await prisma.userPreset.create({
     *   data: {
     *     // ... data to create a UserPreset
     *   }
     * })
     * 
     */
    create<T extends UserPresetCreateArgs>(args: SelectSubset<T, UserPresetCreateArgs<ExtArgs>>): Prisma__UserPresetClient<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPresets.
     * @param {UserPresetCreateManyArgs} args - Arguments to create many UserPresets.
     * @example
     * // Create many UserPresets
     * const userPreset = await prisma.userPreset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPresetCreateManyArgs>(args?: SelectSubset<T, UserPresetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPresets and returns the data saved in the database.
     * @param {UserPresetCreateManyAndReturnArgs} args - Arguments to create many UserPresets.
     * @example
     * // Create many UserPresets
     * const userPreset = await prisma.userPreset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPresets and only return the `userId`
     * const userPresetWithUserIdOnly = await prisma.userPreset.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPresetCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPresetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreset.
     * @param {UserPresetDeleteArgs} args - Arguments to delete one UserPreset.
     * @example
     * // Delete one UserPreset
     * const UserPreset = await prisma.userPreset.delete({
     *   where: {
     *     // ... filter to delete one UserPreset
     *   }
     * })
     * 
     */
    delete<T extends UserPresetDeleteArgs>(args: SelectSubset<T, UserPresetDeleteArgs<ExtArgs>>): Prisma__UserPresetClient<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreset.
     * @param {UserPresetUpdateArgs} args - Arguments to update one UserPreset.
     * @example
     * // Update one UserPreset
     * const userPreset = await prisma.userPreset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPresetUpdateArgs>(args: SelectSubset<T, UserPresetUpdateArgs<ExtArgs>>): Prisma__UserPresetClient<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPresets.
     * @param {UserPresetDeleteManyArgs} args - Arguments to filter UserPresets to delete.
     * @example
     * // Delete a few UserPresets
     * const { count } = await prisma.userPreset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPresetDeleteManyArgs>(args?: SelectSubset<T, UserPresetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPresets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPresets
     * const userPreset = await prisma.userPreset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPresetUpdateManyArgs>(args: SelectSubset<T, UserPresetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPresets and returns the data updated in the database.
     * @param {UserPresetUpdateManyAndReturnArgs} args - Arguments to update many UserPresets.
     * @example
     * // Update many UserPresets
     * const userPreset = await prisma.userPreset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPresets and only return the `userId`
     * const userPresetWithUserIdOnly = await prisma.userPreset.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserPresetUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPresetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreset.
     * @param {UserPresetUpsertArgs} args - Arguments to update or create a UserPreset.
     * @example
     * // Update or create a UserPreset
     * const userPreset = await prisma.userPreset.upsert({
     *   create: {
     *     // ... data to create a UserPreset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreset we want to update
     *   }
     * })
     */
    upsert<T extends UserPresetUpsertArgs>(args: SelectSubset<T, UserPresetUpsertArgs<ExtArgs>>): Prisma__UserPresetClient<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPresets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresetCountArgs} args - Arguments to filter UserPresets to count.
     * @example
     * // Count the number of UserPresets
     * const count = await prisma.userPreset.count({
     *   where: {
     *     // ... the filter for the UserPresets we want to count
     *   }
     * })
    **/
    count<T extends UserPresetCountArgs>(
      args?: Subset<T, UserPresetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPresetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPresetAggregateArgs>(args: Subset<T, UserPresetAggregateArgs>): Prisma.PrismaPromise<GetUserPresetAggregateType<T>>

    /**
     * Group by UserPreset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresetGroupByArgs} args - Group by arguments.
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
      T extends UserPresetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPresetGroupByArgs['orderBy'] }
        : { orderBy?: UserPresetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPresetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPresetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreset model
   */
  readonly fields: UserPresetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPresetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    degreePreset<T extends DegreePresetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DegreePresetDefaultArgs<ExtArgs>>): Prisma__DegreePresetClient<$Result.GetResult<Prisma.$DegreePresetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserPreset model
   */
  interface UserPresetFieldRefs {
    readonly userId: FieldRef<"UserPreset", 'String'>
    readonly degreePresetId: FieldRef<"UserPreset", 'String'>
    readonly importedAt: FieldRef<"UserPreset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreset findUnique
   */
  export type UserPresetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetInclude<ExtArgs> | null
    /**
     * Filter, which UserPreset to fetch.
     */
    where: UserPresetWhereUniqueInput
  }

  /**
   * UserPreset findUniqueOrThrow
   */
  export type UserPresetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetInclude<ExtArgs> | null
    /**
     * Filter, which UserPreset to fetch.
     */
    where: UserPresetWhereUniqueInput
  }

  /**
   * UserPreset findFirst
   */
  export type UserPresetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetInclude<ExtArgs> | null
    /**
     * Filter, which UserPreset to fetch.
     */
    where?: UserPresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPresets to fetch.
     */
    orderBy?: UserPresetOrderByWithRelationInput | UserPresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPresets.
     */
    cursor?: UserPresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPresets.
     */
    distinct?: UserPresetScalarFieldEnum | UserPresetScalarFieldEnum[]
  }

  /**
   * UserPreset findFirstOrThrow
   */
  export type UserPresetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetInclude<ExtArgs> | null
    /**
     * Filter, which UserPreset to fetch.
     */
    where?: UserPresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPresets to fetch.
     */
    orderBy?: UserPresetOrderByWithRelationInput | UserPresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPresets.
     */
    cursor?: UserPresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPresets.
     */
    distinct?: UserPresetScalarFieldEnum | UserPresetScalarFieldEnum[]
  }

  /**
   * UserPreset findMany
   */
  export type UserPresetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetInclude<ExtArgs> | null
    /**
     * Filter, which UserPresets to fetch.
     */
    where?: UserPresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPresets to fetch.
     */
    orderBy?: UserPresetOrderByWithRelationInput | UserPresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPresets.
     */
    cursor?: UserPresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPresets.
     */
    distinct?: UserPresetScalarFieldEnum | UserPresetScalarFieldEnum[]
  }

  /**
   * UserPreset create
   */
  export type UserPresetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreset.
     */
    data: XOR<UserPresetCreateInput, UserPresetUncheckedCreateInput>
  }

  /**
   * UserPreset createMany
   */
  export type UserPresetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPresets.
     */
    data: UserPresetCreateManyInput | UserPresetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreset createManyAndReturn
   */
  export type UserPresetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * The data used to create many UserPresets.
     */
    data: UserPresetCreateManyInput | UserPresetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreset update
   */
  export type UserPresetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreset.
     */
    data: XOR<UserPresetUpdateInput, UserPresetUncheckedUpdateInput>
    /**
     * Choose, which UserPreset to update.
     */
    where: UserPresetWhereUniqueInput
  }

  /**
   * UserPreset updateMany
   */
  export type UserPresetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPresets.
     */
    data: XOR<UserPresetUpdateManyMutationInput, UserPresetUncheckedUpdateManyInput>
    /**
     * Filter which UserPresets to update
     */
    where?: UserPresetWhereInput
    /**
     * Limit how many UserPresets to update.
     */
    limit?: number
  }

  /**
   * UserPreset updateManyAndReturn
   */
  export type UserPresetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * The data used to update UserPresets.
     */
    data: XOR<UserPresetUpdateManyMutationInput, UserPresetUncheckedUpdateManyInput>
    /**
     * Filter which UserPresets to update
     */
    where?: UserPresetWhereInput
    /**
     * Limit how many UserPresets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreset upsert
   */
  export type UserPresetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreset to update in case it exists.
     */
    where: UserPresetWhereUniqueInput
    /**
     * In case the UserPreset found by the `where` argument doesn't exist, create a new UserPreset with this data.
     */
    create: XOR<UserPresetCreateInput, UserPresetUncheckedCreateInput>
    /**
     * In case the UserPreset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPresetUpdateInput, UserPresetUncheckedUpdateInput>
  }

  /**
   * UserPreset delete
   */
  export type UserPresetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetInclude<ExtArgs> | null
    /**
     * Filter which UserPreset to delete.
     */
    where: UserPresetWhereUniqueInput
  }

  /**
   * UserPreset deleteMany
   */
  export type UserPresetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPresets to delete
     */
    where?: UserPresetWhereInput
    /**
     * Limit how many UserPresets to delete.
     */
    limit?: number
  }

  /**
   * UserPreset without action
   */
  export type UserPresetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    userPlanModules?: boolean | User$userPlanModulesArgs<ExtArgs>
    userPresets?: boolean | User$userPresetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    userPlanModules?: boolean | User$userPlanModulesArgs<ExtArgs>
    userPresets?: boolean | User$userPresetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      userPlanModules: Prisma.$UserPlanModulePayload<ExtArgs>[]
      userPresets: Prisma.$UserPresetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPlanModules<T extends User$userPlanModulesArgs<ExtArgs> = {}>(args?: Subset<T, User$userPlanModulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlanModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPresets<T extends User$userPresetsArgs<ExtArgs> = {}>(args?: Subset<T, User$userPresetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPresetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.userPlanModules
   */
  export type User$userPlanModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.userPresets
   */
  export type User$userPresetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreset
     */
    select?: UserPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreset
     */
    omit?: UserPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresetInclude<ExtArgs> | null
    where?: UserPresetWhereInput
    orderBy?: UserPresetOrderByWithRelationInput | UserPresetOrderByWithRelationInput[]
    cursor?: UserPresetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPresetScalarFieldEnum | UserPresetScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
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
    prereqTree: 'prereqTree',
    preclusion: 'preclusion',
    prerequisite: 'prerequisite',
    fulfillreqs: 'fulfillreqs'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const DegreePresetScalarFieldEnum: {
    id: 'id',
    degreeCode: 'degreeCode',
    degreeName: 'degreeName'
  };

  export type DegreePresetScalarFieldEnum = (typeof DegreePresetScalarFieldEnum)[keyof typeof DegreePresetScalarFieldEnum]


  export const DegreePresetModuleScalarFieldEnum: {
    degreePresetId: 'degreePresetId',
    moduleId: 'moduleId'
  };

  export type DegreePresetModuleScalarFieldEnum = (typeof DegreePresetModuleScalarFieldEnum)[keyof typeof DegreePresetModuleScalarFieldEnum]


  export const UserPlanModuleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    moduleId: 'moduleId',
    planYear: 'planYear',
    planSemester: 'planSemester',
    isPresetModule: 'isPresetModule',
    degreePresetId: 'degreePresetId'
  };

  export type UserPlanModuleScalarFieldEnum = (typeof UserPlanModuleScalarFieldEnum)[keyof typeof UserPlanModuleScalarFieldEnum]


  export const UserPresetScalarFieldEnum: {
    userId: 'userId',
    degreePresetId: 'degreePresetId',
    importedAt: 'importedAt'
  };

  export type UserPresetScalarFieldEnum = (typeof UserPresetScalarFieldEnum)[keyof typeof UserPresetScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
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
    preclusion?: StringNullableFilter<"Module"> | string | null
    prerequisite?: StringNullableFilter<"Module"> | string | null
    fulfillreqs?: StringNullableListFilter<"Module">
    userPlanModules?: UserPlanModuleListRelationFilter
    degreePresetLinks?: DegreePresetModuleListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    workload?: SortOrderInput | SortOrder
    prereqTree?: SortOrderInput | SortOrder
    preclusion?: SortOrderInput | SortOrder
    prerequisite?: SortOrderInput | SortOrder
    fulfillreqs?: SortOrder
    userPlanModules?: UserPlanModuleOrderByRelationAggregateInput
    degreePresetLinks?: DegreePresetModuleOrderByRelationAggregateInput
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
    preclusion?: StringNullableFilter<"Module"> | string | null
    prerequisite?: StringNullableFilter<"Module"> | string | null
    fulfillreqs?: StringNullableListFilter<"Module">
    userPlanModules?: UserPlanModuleListRelationFilter
    degreePresetLinks?: DegreePresetModuleListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    workload?: SortOrderInput | SortOrder
    prereqTree?: SortOrderInput | SortOrder
    preclusion?: SortOrderInput | SortOrder
    prerequisite?: SortOrderInput | SortOrder
    fulfillreqs?: SortOrder
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
    preclusion?: StringNullableWithAggregatesFilter<"Module"> | string | null
    prerequisite?: StringNullableWithAggregatesFilter<"Module"> | string | null
    fulfillreqs?: StringNullableListFilter<"Module">
  }

  export type DegreePresetWhereInput = {
    AND?: DegreePresetWhereInput | DegreePresetWhereInput[]
    OR?: DegreePresetWhereInput[]
    NOT?: DegreePresetWhereInput | DegreePresetWhereInput[]
    id?: StringFilter<"DegreePreset"> | string
    degreeCode?: StringFilter<"DegreePreset"> | string
    degreeName?: StringFilter<"DegreePreset"> | string
    userPlanModules?: UserPlanModuleListRelationFilter
    moduleLinks?: DegreePresetModuleListRelationFilter
    userPresets?: UserPresetListRelationFilter
  }

  export type DegreePresetOrderByWithRelationInput = {
    id?: SortOrder
    degreeCode?: SortOrder
    degreeName?: SortOrder
    userPlanModules?: UserPlanModuleOrderByRelationAggregateInput
    moduleLinks?: DegreePresetModuleOrderByRelationAggregateInput
    userPresets?: UserPresetOrderByRelationAggregateInput
  }

  export type DegreePresetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    degreeCode?: string
    AND?: DegreePresetWhereInput | DegreePresetWhereInput[]
    OR?: DegreePresetWhereInput[]
    NOT?: DegreePresetWhereInput | DegreePresetWhereInput[]
    degreeName?: StringFilter<"DegreePreset"> | string
    userPlanModules?: UserPlanModuleListRelationFilter
    moduleLinks?: DegreePresetModuleListRelationFilter
    userPresets?: UserPresetListRelationFilter
  }, "id" | "degreeCode">

  export type DegreePresetOrderByWithAggregationInput = {
    id?: SortOrder
    degreeCode?: SortOrder
    degreeName?: SortOrder
    _count?: DegreePresetCountOrderByAggregateInput
    _max?: DegreePresetMaxOrderByAggregateInput
    _min?: DegreePresetMinOrderByAggregateInput
  }

  export type DegreePresetScalarWhereWithAggregatesInput = {
    AND?: DegreePresetScalarWhereWithAggregatesInput | DegreePresetScalarWhereWithAggregatesInput[]
    OR?: DegreePresetScalarWhereWithAggregatesInput[]
    NOT?: DegreePresetScalarWhereWithAggregatesInput | DegreePresetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DegreePreset"> | string
    degreeCode?: StringWithAggregatesFilter<"DegreePreset"> | string
    degreeName?: StringWithAggregatesFilter<"DegreePreset"> | string
  }

  export type DegreePresetModuleWhereInput = {
    AND?: DegreePresetModuleWhereInput | DegreePresetModuleWhereInput[]
    OR?: DegreePresetModuleWhereInput[]
    NOT?: DegreePresetModuleWhereInput | DegreePresetModuleWhereInput[]
    degreePresetId?: StringFilter<"DegreePresetModule"> | string
    moduleId?: StringFilter<"DegreePresetModule"> | string
    degreePreset?: XOR<DegreePresetScalarRelationFilter, DegreePresetWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type DegreePresetModuleOrderByWithRelationInput = {
    degreePresetId?: SortOrder
    moduleId?: SortOrder
    degreePreset?: DegreePresetOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
  }

  export type DegreePresetModuleWhereUniqueInput = Prisma.AtLeast<{
    degreePresetId_moduleId?: DegreePresetModuleDegreePresetIdModuleIdCompoundUniqueInput
    AND?: DegreePresetModuleWhereInput | DegreePresetModuleWhereInput[]
    OR?: DegreePresetModuleWhereInput[]
    NOT?: DegreePresetModuleWhereInput | DegreePresetModuleWhereInput[]
    degreePresetId?: StringFilter<"DegreePresetModule"> | string
    moduleId?: StringFilter<"DegreePresetModule"> | string
    degreePreset?: XOR<DegreePresetScalarRelationFilter, DegreePresetWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "degreePresetId_moduleId">

  export type DegreePresetModuleOrderByWithAggregationInput = {
    degreePresetId?: SortOrder
    moduleId?: SortOrder
    _count?: DegreePresetModuleCountOrderByAggregateInput
    _max?: DegreePresetModuleMaxOrderByAggregateInput
    _min?: DegreePresetModuleMinOrderByAggregateInput
  }

  export type DegreePresetModuleScalarWhereWithAggregatesInput = {
    AND?: DegreePresetModuleScalarWhereWithAggregatesInput | DegreePresetModuleScalarWhereWithAggregatesInput[]
    OR?: DegreePresetModuleScalarWhereWithAggregatesInput[]
    NOT?: DegreePresetModuleScalarWhereWithAggregatesInput | DegreePresetModuleScalarWhereWithAggregatesInput[]
    degreePresetId?: StringWithAggregatesFilter<"DegreePresetModule"> | string
    moduleId?: StringWithAggregatesFilter<"DegreePresetModule"> | string
  }

  export type UserPlanModuleWhereInput = {
    AND?: UserPlanModuleWhereInput | UserPlanModuleWhereInput[]
    OR?: UserPlanModuleWhereInput[]
    NOT?: UserPlanModuleWhereInput | UserPlanModuleWhereInput[]
    id?: StringFilter<"UserPlanModule"> | string
    userId?: StringFilter<"UserPlanModule"> | string
    moduleId?: StringFilter<"UserPlanModule"> | string
    planYear?: IntFilter<"UserPlanModule"> | number
    planSemester?: IntFilter<"UserPlanModule"> | number
    isPresetModule?: BoolFilter<"UserPlanModule"> | boolean
    degreePresetId?: StringNullableFilter<"UserPlanModule"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    degreePreset?: XOR<DegreePresetNullableScalarRelationFilter, DegreePresetWhereInput> | null
  }

  export type UserPlanModuleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    planYear?: SortOrder
    planSemester?: SortOrder
    isPresetModule?: SortOrder
    degreePresetId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
    degreePreset?: DegreePresetOrderByWithRelationInput
  }

  export type UserPlanModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_moduleId?: UserPlanModuleUserIdModuleIdCompoundUniqueInput
    AND?: UserPlanModuleWhereInput | UserPlanModuleWhereInput[]
    OR?: UserPlanModuleWhereInput[]
    NOT?: UserPlanModuleWhereInput | UserPlanModuleWhereInput[]
    userId?: StringFilter<"UserPlanModule"> | string
    moduleId?: StringFilter<"UserPlanModule"> | string
    planYear?: IntFilter<"UserPlanModule"> | number
    planSemester?: IntFilter<"UserPlanModule"> | number
    isPresetModule?: BoolFilter<"UserPlanModule"> | boolean
    degreePresetId?: StringNullableFilter<"UserPlanModule"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    degreePreset?: XOR<DegreePresetNullableScalarRelationFilter, DegreePresetWhereInput> | null
  }, "id" | "userId_moduleId">

  export type UserPlanModuleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    planYear?: SortOrder
    planSemester?: SortOrder
    isPresetModule?: SortOrder
    degreePresetId?: SortOrderInput | SortOrder
    _count?: UserPlanModuleCountOrderByAggregateInput
    _avg?: UserPlanModuleAvgOrderByAggregateInput
    _max?: UserPlanModuleMaxOrderByAggregateInput
    _min?: UserPlanModuleMinOrderByAggregateInput
    _sum?: UserPlanModuleSumOrderByAggregateInput
  }

  export type UserPlanModuleScalarWhereWithAggregatesInput = {
    AND?: UserPlanModuleScalarWhereWithAggregatesInput | UserPlanModuleScalarWhereWithAggregatesInput[]
    OR?: UserPlanModuleScalarWhereWithAggregatesInput[]
    NOT?: UserPlanModuleScalarWhereWithAggregatesInput | UserPlanModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPlanModule"> | string
    userId?: StringWithAggregatesFilter<"UserPlanModule"> | string
    moduleId?: StringWithAggregatesFilter<"UserPlanModule"> | string
    planYear?: IntWithAggregatesFilter<"UserPlanModule"> | number
    planSemester?: IntWithAggregatesFilter<"UserPlanModule"> | number
    isPresetModule?: BoolWithAggregatesFilter<"UserPlanModule"> | boolean
    degreePresetId?: StringNullableWithAggregatesFilter<"UserPlanModule"> | string | null
  }

  export type UserPresetWhereInput = {
    AND?: UserPresetWhereInput | UserPresetWhereInput[]
    OR?: UserPresetWhereInput[]
    NOT?: UserPresetWhereInput | UserPresetWhereInput[]
    userId?: StringFilter<"UserPreset"> | string
    degreePresetId?: StringFilter<"UserPreset"> | string
    importedAt?: DateTimeFilter<"UserPreset"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    degreePreset?: XOR<DegreePresetScalarRelationFilter, DegreePresetWhereInput>
  }

  export type UserPresetOrderByWithRelationInput = {
    userId?: SortOrder
    degreePresetId?: SortOrder
    importedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    degreePreset?: DegreePresetOrderByWithRelationInput
  }

  export type UserPresetWhereUniqueInput = Prisma.AtLeast<{
    userId_degreePresetId?: UserPresetUserIdDegreePresetIdCompoundUniqueInput
    AND?: UserPresetWhereInput | UserPresetWhereInput[]
    OR?: UserPresetWhereInput[]
    NOT?: UserPresetWhereInput | UserPresetWhereInput[]
    userId?: StringFilter<"UserPreset"> | string
    degreePresetId?: StringFilter<"UserPreset"> | string
    importedAt?: DateTimeFilter<"UserPreset"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    degreePreset?: XOR<DegreePresetScalarRelationFilter, DegreePresetWhereInput>
  }, "userId_degreePresetId">

  export type UserPresetOrderByWithAggregationInput = {
    userId?: SortOrder
    degreePresetId?: SortOrder
    importedAt?: SortOrder
    _count?: UserPresetCountOrderByAggregateInput
    _max?: UserPresetMaxOrderByAggregateInput
    _min?: UserPresetMinOrderByAggregateInput
  }

  export type UserPresetScalarWhereWithAggregatesInput = {
    AND?: UserPresetScalarWhereWithAggregatesInput | UserPresetScalarWhereWithAggregatesInput[]
    OR?: UserPresetScalarWhereWithAggregatesInput[]
    NOT?: UserPresetScalarWhereWithAggregatesInput | UserPresetScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserPreset"> | string
    degreePresetId?: StringWithAggregatesFilter<"UserPreset"> | string
    importedAt?: DateTimeWithAggregatesFilter<"UserPreset"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    userPlanModules?: UserPlanModuleListRelationFilter
    userPresets?: UserPresetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    userPlanModules?: UserPlanModuleOrderByRelationAggregateInput
    userPresets?: UserPresetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    userPlanModules?: UserPlanModuleListRelationFilter
    userPresets?: UserPresetListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type ModuleCreateInput = {
    id: string
    title: string
    description?: string | null
    department?: string | null
    workload?: number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: string | null
    prerequisite?: string | null
    fulfillreqs?: ModuleCreatefulfillreqsInput | string[]
    userPlanModules?: UserPlanModuleCreateNestedManyWithoutModuleInput
    degreePresetLinks?: DegreePresetModuleCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id: string
    title: string
    description?: string | null
    department?: string | null
    workload?: number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: string | null
    prerequisite?: string | null
    fulfillreqs?: ModuleCreatefulfillreqsInput | string[]
    userPlanModules?: UserPlanModuleUncheckedCreateNestedManyWithoutModuleInput
    degreePresetLinks?: DegreePresetModuleUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: NullableStringFieldUpdateOperationsInput | string | null
    prerequisite?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillreqs?: ModuleUpdatefulfillreqsInput | string[]
    userPlanModules?: UserPlanModuleUpdateManyWithoutModuleNestedInput
    degreePresetLinks?: DegreePresetModuleUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: NullableStringFieldUpdateOperationsInput | string | null
    prerequisite?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillreqs?: ModuleUpdatefulfillreqsInput | string[]
    userPlanModules?: UserPlanModuleUncheckedUpdateManyWithoutModuleNestedInput
    degreePresetLinks?: DegreePresetModuleUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id: string
    title: string
    description?: string | null
    department?: string | null
    workload?: number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: string | null
    prerequisite?: string | null
    fulfillreqs?: ModuleCreatefulfillreqsInput | string[]
  }

  export type ModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: NullableStringFieldUpdateOperationsInput | string | null
    prerequisite?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillreqs?: ModuleUpdatefulfillreqsInput | string[]
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: NullableStringFieldUpdateOperationsInput | string | null
    prerequisite?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillreqs?: ModuleUpdatefulfillreqsInput | string[]
  }

  export type DegreePresetCreateInput = {
    id?: string
    degreeCode: string
    degreeName: string
    userPlanModules?: UserPlanModuleCreateNestedManyWithoutDegreePresetInput
    moduleLinks?: DegreePresetModuleCreateNestedManyWithoutDegreePresetInput
    userPresets?: UserPresetCreateNestedManyWithoutDegreePresetInput
  }

  export type DegreePresetUncheckedCreateInput = {
    id?: string
    degreeCode: string
    degreeName: string
    userPlanModules?: UserPlanModuleUncheckedCreateNestedManyWithoutDegreePresetInput
    moduleLinks?: DegreePresetModuleUncheckedCreateNestedManyWithoutDegreePresetInput
    userPresets?: UserPresetUncheckedCreateNestedManyWithoutDegreePresetInput
  }

  export type DegreePresetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    degreeCode?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    userPlanModules?: UserPlanModuleUpdateManyWithoutDegreePresetNestedInput
    moduleLinks?: DegreePresetModuleUpdateManyWithoutDegreePresetNestedInput
    userPresets?: UserPresetUpdateManyWithoutDegreePresetNestedInput
  }

  export type DegreePresetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    degreeCode?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    userPlanModules?: UserPlanModuleUncheckedUpdateManyWithoutDegreePresetNestedInput
    moduleLinks?: DegreePresetModuleUncheckedUpdateManyWithoutDegreePresetNestedInput
    userPresets?: UserPresetUncheckedUpdateManyWithoutDegreePresetNestedInput
  }

  export type DegreePresetCreateManyInput = {
    id?: string
    degreeCode: string
    degreeName: string
  }

  export type DegreePresetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    degreeCode?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
  }

  export type DegreePresetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    degreeCode?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
  }

  export type DegreePresetModuleCreateInput = {
    degreePreset: DegreePresetCreateNestedOneWithoutModuleLinksInput
    module: ModuleCreateNestedOneWithoutDegreePresetLinksInput
  }

  export type DegreePresetModuleUncheckedCreateInput = {
    degreePresetId: string
    moduleId: string
  }

  export type DegreePresetModuleUpdateInput = {
    degreePreset?: DegreePresetUpdateOneRequiredWithoutModuleLinksNestedInput
    module?: ModuleUpdateOneRequiredWithoutDegreePresetLinksNestedInput
  }

  export type DegreePresetModuleUncheckedUpdateInput = {
    degreePresetId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
  }

  export type DegreePresetModuleCreateManyInput = {
    degreePresetId: string
    moduleId: string
  }

  export type DegreePresetModuleUpdateManyMutationInput = {

  }

  export type DegreePresetModuleUncheckedUpdateManyInput = {
    degreePresetId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPlanModuleCreateInput = {
    id?: string
    planYear: number
    planSemester: number
    isPresetModule?: boolean
    user: UserCreateNestedOneWithoutUserPlanModulesInput
    module: ModuleCreateNestedOneWithoutUserPlanModulesInput
    degreePreset?: DegreePresetCreateNestedOneWithoutUserPlanModulesInput
  }

  export type UserPlanModuleUncheckedCreateInput = {
    id?: string
    userId: string
    moduleId: string
    planYear: number
    planSemester: number
    isPresetModule?: boolean
    degreePresetId?: string | null
  }

  export type UserPlanModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserPlanModulesNestedInput
    module?: ModuleUpdateOneRequiredWithoutUserPlanModulesNestedInput
    degreePreset?: DegreePresetUpdateOneWithoutUserPlanModulesNestedInput
  }

  export type UserPlanModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
    degreePresetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPlanModuleCreateManyInput = {
    id?: string
    userId: string
    moduleId: string
    planYear: number
    planSemester: number
    isPresetModule?: boolean
    degreePresetId?: string | null
  }

  export type UserPlanModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPlanModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
    degreePresetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPresetCreateInput = {
    importedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPresetsInput
    degreePreset: DegreePresetCreateNestedOneWithoutUserPresetsInput
  }

  export type UserPresetUncheckedCreateInput = {
    userId: string
    degreePresetId: string
    importedAt?: Date | string
  }

  export type UserPresetUpdateInput = {
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPresetsNestedInput
    degreePreset?: DegreePresetUpdateOneRequiredWithoutUserPresetsNestedInput
  }

  export type UserPresetUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    degreePresetId?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPresetCreateManyInput = {
    userId: string
    degreePresetId: string
    importedAt?: Date | string
  }

  export type UserPresetUpdateManyMutationInput = {
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPresetUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    degreePresetId?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    userPlanModules?: UserPlanModuleCreateNestedManyWithoutUserInput
    userPresets?: UserPresetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userPlanModules?: UserPlanModuleUncheckedCreateNestedManyWithoutUserInput
    userPresets?: UserPresetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userPlanModules?: UserPlanModuleUpdateManyWithoutUserNestedInput
    userPresets?: UserPresetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userPlanModules?: UserPlanModuleUncheckedUpdateManyWithoutUserNestedInput
    userPresets?: UserPresetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserPlanModuleListRelationFilter = {
    every?: UserPlanModuleWhereInput
    some?: UserPlanModuleWhereInput
    none?: UserPlanModuleWhereInput
  }

  export type DegreePresetModuleListRelationFilter = {
    every?: DegreePresetModuleWhereInput
    some?: DegreePresetModuleWhereInput
    none?: DegreePresetModuleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserPlanModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DegreePresetModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    department?: SortOrder
    workload?: SortOrder
    prereqTree?: SortOrder
    preclusion?: SortOrder
    prerequisite?: SortOrder
    fulfillreqs?: SortOrder
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
    preclusion?: SortOrder
    prerequisite?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    department?: SortOrder
    workload?: SortOrder
    preclusion?: SortOrder
    prerequisite?: SortOrder
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

  export type UserPresetListRelationFilter = {
    every?: UserPresetWhereInput
    some?: UserPresetWhereInput
    none?: UserPresetWhereInput
  }

  export type UserPresetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DegreePresetCountOrderByAggregateInput = {
    id?: SortOrder
    degreeCode?: SortOrder
    degreeName?: SortOrder
  }

  export type DegreePresetMaxOrderByAggregateInput = {
    id?: SortOrder
    degreeCode?: SortOrder
    degreeName?: SortOrder
  }

  export type DegreePresetMinOrderByAggregateInput = {
    id?: SortOrder
    degreeCode?: SortOrder
    degreeName?: SortOrder
  }

  export type DegreePresetScalarRelationFilter = {
    is?: DegreePresetWhereInput
    isNot?: DegreePresetWhereInput
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type DegreePresetModuleDegreePresetIdModuleIdCompoundUniqueInput = {
    degreePresetId: string
    moduleId: string
  }

  export type DegreePresetModuleCountOrderByAggregateInput = {
    degreePresetId?: SortOrder
    moduleId?: SortOrder
  }

  export type DegreePresetModuleMaxOrderByAggregateInput = {
    degreePresetId?: SortOrder
    moduleId?: SortOrder
  }

  export type DegreePresetModuleMinOrderByAggregateInput = {
    degreePresetId?: SortOrder
    moduleId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DegreePresetNullableScalarRelationFilter = {
    is?: DegreePresetWhereInput | null
    isNot?: DegreePresetWhereInput | null
  }

  export type UserPlanModuleUserIdModuleIdCompoundUniqueInput = {
    userId: string
    moduleId: string
  }

  export type UserPlanModuleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    planYear?: SortOrder
    planSemester?: SortOrder
    isPresetModule?: SortOrder
    degreePresetId?: SortOrder
  }

  export type UserPlanModuleAvgOrderByAggregateInput = {
    planYear?: SortOrder
    planSemester?: SortOrder
  }

  export type UserPlanModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    planYear?: SortOrder
    planSemester?: SortOrder
    isPresetModule?: SortOrder
    degreePresetId?: SortOrder
  }

  export type UserPlanModuleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    planYear?: SortOrder
    planSemester?: SortOrder
    isPresetModule?: SortOrder
    degreePresetId?: SortOrder
  }

  export type UserPlanModuleSumOrderByAggregateInput = {
    planYear?: SortOrder
    planSemester?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserPresetUserIdDegreePresetIdCompoundUniqueInput = {
    userId: string
    degreePresetId: string
  }

  export type UserPresetCountOrderByAggregateInput = {
    userId?: SortOrder
    degreePresetId?: SortOrder
    importedAt?: SortOrder
  }

  export type UserPresetMaxOrderByAggregateInput = {
    userId?: SortOrder
    degreePresetId?: SortOrder
    importedAt?: SortOrder
  }

  export type UserPresetMinOrderByAggregateInput = {
    userId?: SortOrder
    degreePresetId?: SortOrder
    importedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleCreatefulfillreqsInput = {
    set: string[]
  }

  export type UserPlanModuleCreateNestedManyWithoutModuleInput = {
    create?: XOR<UserPlanModuleCreateWithoutModuleInput, UserPlanModuleUncheckedCreateWithoutModuleInput> | UserPlanModuleCreateWithoutModuleInput[] | UserPlanModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutModuleInput | UserPlanModuleCreateOrConnectWithoutModuleInput[]
    createMany?: UserPlanModuleCreateManyModuleInputEnvelope
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
  }

  export type DegreePresetModuleCreateNestedManyWithoutModuleInput = {
    create?: XOR<DegreePresetModuleCreateWithoutModuleInput, DegreePresetModuleUncheckedCreateWithoutModuleInput> | DegreePresetModuleCreateWithoutModuleInput[] | DegreePresetModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: DegreePresetModuleCreateOrConnectWithoutModuleInput | DegreePresetModuleCreateOrConnectWithoutModuleInput[]
    createMany?: DegreePresetModuleCreateManyModuleInputEnvelope
    connect?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
  }

  export type UserPlanModuleUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<UserPlanModuleCreateWithoutModuleInput, UserPlanModuleUncheckedCreateWithoutModuleInput> | UserPlanModuleCreateWithoutModuleInput[] | UserPlanModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutModuleInput | UserPlanModuleCreateOrConnectWithoutModuleInput[]
    createMany?: UserPlanModuleCreateManyModuleInputEnvelope
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
  }

  export type DegreePresetModuleUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<DegreePresetModuleCreateWithoutModuleInput, DegreePresetModuleUncheckedCreateWithoutModuleInput> | DegreePresetModuleCreateWithoutModuleInput[] | DegreePresetModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: DegreePresetModuleCreateOrConnectWithoutModuleInput | DegreePresetModuleCreateOrConnectWithoutModuleInput[]
    createMany?: DegreePresetModuleCreateManyModuleInputEnvelope
    connect?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
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

  export type ModuleUpdatefulfillreqsInput = {
    set?: string[]
    push?: string | string[]
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

  export type DegreePresetModuleUpdateManyWithoutModuleNestedInput = {
    create?: XOR<DegreePresetModuleCreateWithoutModuleInput, DegreePresetModuleUncheckedCreateWithoutModuleInput> | DegreePresetModuleCreateWithoutModuleInput[] | DegreePresetModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: DegreePresetModuleCreateOrConnectWithoutModuleInput | DegreePresetModuleCreateOrConnectWithoutModuleInput[]
    upsert?: DegreePresetModuleUpsertWithWhereUniqueWithoutModuleInput | DegreePresetModuleUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: DegreePresetModuleCreateManyModuleInputEnvelope
    set?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    disconnect?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    delete?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    connect?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    update?: DegreePresetModuleUpdateWithWhereUniqueWithoutModuleInput | DegreePresetModuleUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: DegreePresetModuleUpdateManyWithWhereWithoutModuleInput | DegreePresetModuleUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: DegreePresetModuleScalarWhereInput | DegreePresetModuleScalarWhereInput[]
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

  export type DegreePresetModuleUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<DegreePresetModuleCreateWithoutModuleInput, DegreePresetModuleUncheckedCreateWithoutModuleInput> | DegreePresetModuleCreateWithoutModuleInput[] | DegreePresetModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: DegreePresetModuleCreateOrConnectWithoutModuleInput | DegreePresetModuleCreateOrConnectWithoutModuleInput[]
    upsert?: DegreePresetModuleUpsertWithWhereUniqueWithoutModuleInput | DegreePresetModuleUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: DegreePresetModuleCreateManyModuleInputEnvelope
    set?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    disconnect?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    delete?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    connect?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    update?: DegreePresetModuleUpdateWithWhereUniqueWithoutModuleInput | DegreePresetModuleUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: DegreePresetModuleUpdateManyWithWhereWithoutModuleInput | DegreePresetModuleUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: DegreePresetModuleScalarWhereInput | DegreePresetModuleScalarWhereInput[]
  }

  export type UserPlanModuleCreateNestedManyWithoutDegreePresetInput = {
    create?: XOR<UserPlanModuleCreateWithoutDegreePresetInput, UserPlanModuleUncheckedCreateWithoutDegreePresetInput> | UserPlanModuleCreateWithoutDegreePresetInput[] | UserPlanModuleUncheckedCreateWithoutDegreePresetInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutDegreePresetInput | UserPlanModuleCreateOrConnectWithoutDegreePresetInput[]
    createMany?: UserPlanModuleCreateManyDegreePresetInputEnvelope
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
  }

  export type DegreePresetModuleCreateNestedManyWithoutDegreePresetInput = {
    create?: XOR<DegreePresetModuleCreateWithoutDegreePresetInput, DegreePresetModuleUncheckedCreateWithoutDegreePresetInput> | DegreePresetModuleCreateWithoutDegreePresetInput[] | DegreePresetModuleUncheckedCreateWithoutDegreePresetInput[]
    connectOrCreate?: DegreePresetModuleCreateOrConnectWithoutDegreePresetInput | DegreePresetModuleCreateOrConnectWithoutDegreePresetInput[]
    createMany?: DegreePresetModuleCreateManyDegreePresetInputEnvelope
    connect?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
  }

  export type UserPresetCreateNestedManyWithoutDegreePresetInput = {
    create?: XOR<UserPresetCreateWithoutDegreePresetInput, UserPresetUncheckedCreateWithoutDegreePresetInput> | UserPresetCreateWithoutDegreePresetInput[] | UserPresetUncheckedCreateWithoutDegreePresetInput[]
    connectOrCreate?: UserPresetCreateOrConnectWithoutDegreePresetInput | UserPresetCreateOrConnectWithoutDegreePresetInput[]
    createMany?: UserPresetCreateManyDegreePresetInputEnvelope
    connect?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
  }

  export type UserPlanModuleUncheckedCreateNestedManyWithoutDegreePresetInput = {
    create?: XOR<UserPlanModuleCreateWithoutDegreePresetInput, UserPlanModuleUncheckedCreateWithoutDegreePresetInput> | UserPlanModuleCreateWithoutDegreePresetInput[] | UserPlanModuleUncheckedCreateWithoutDegreePresetInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutDegreePresetInput | UserPlanModuleCreateOrConnectWithoutDegreePresetInput[]
    createMany?: UserPlanModuleCreateManyDegreePresetInputEnvelope
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
  }

  export type DegreePresetModuleUncheckedCreateNestedManyWithoutDegreePresetInput = {
    create?: XOR<DegreePresetModuleCreateWithoutDegreePresetInput, DegreePresetModuleUncheckedCreateWithoutDegreePresetInput> | DegreePresetModuleCreateWithoutDegreePresetInput[] | DegreePresetModuleUncheckedCreateWithoutDegreePresetInput[]
    connectOrCreate?: DegreePresetModuleCreateOrConnectWithoutDegreePresetInput | DegreePresetModuleCreateOrConnectWithoutDegreePresetInput[]
    createMany?: DegreePresetModuleCreateManyDegreePresetInputEnvelope
    connect?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
  }

  export type UserPresetUncheckedCreateNestedManyWithoutDegreePresetInput = {
    create?: XOR<UserPresetCreateWithoutDegreePresetInput, UserPresetUncheckedCreateWithoutDegreePresetInput> | UserPresetCreateWithoutDegreePresetInput[] | UserPresetUncheckedCreateWithoutDegreePresetInput[]
    connectOrCreate?: UserPresetCreateOrConnectWithoutDegreePresetInput | UserPresetCreateOrConnectWithoutDegreePresetInput[]
    createMany?: UserPresetCreateManyDegreePresetInputEnvelope
    connect?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
  }

  export type UserPlanModuleUpdateManyWithoutDegreePresetNestedInput = {
    create?: XOR<UserPlanModuleCreateWithoutDegreePresetInput, UserPlanModuleUncheckedCreateWithoutDegreePresetInput> | UserPlanModuleCreateWithoutDegreePresetInput[] | UserPlanModuleUncheckedCreateWithoutDegreePresetInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutDegreePresetInput | UserPlanModuleCreateOrConnectWithoutDegreePresetInput[]
    upsert?: UserPlanModuleUpsertWithWhereUniqueWithoutDegreePresetInput | UserPlanModuleUpsertWithWhereUniqueWithoutDegreePresetInput[]
    createMany?: UserPlanModuleCreateManyDegreePresetInputEnvelope
    set?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    disconnect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    delete?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    update?: UserPlanModuleUpdateWithWhereUniqueWithoutDegreePresetInput | UserPlanModuleUpdateWithWhereUniqueWithoutDegreePresetInput[]
    updateMany?: UserPlanModuleUpdateManyWithWhereWithoutDegreePresetInput | UserPlanModuleUpdateManyWithWhereWithoutDegreePresetInput[]
    deleteMany?: UserPlanModuleScalarWhereInput | UserPlanModuleScalarWhereInput[]
  }

  export type DegreePresetModuleUpdateManyWithoutDegreePresetNestedInput = {
    create?: XOR<DegreePresetModuleCreateWithoutDegreePresetInput, DegreePresetModuleUncheckedCreateWithoutDegreePresetInput> | DegreePresetModuleCreateWithoutDegreePresetInput[] | DegreePresetModuleUncheckedCreateWithoutDegreePresetInput[]
    connectOrCreate?: DegreePresetModuleCreateOrConnectWithoutDegreePresetInput | DegreePresetModuleCreateOrConnectWithoutDegreePresetInput[]
    upsert?: DegreePresetModuleUpsertWithWhereUniqueWithoutDegreePresetInput | DegreePresetModuleUpsertWithWhereUniqueWithoutDegreePresetInput[]
    createMany?: DegreePresetModuleCreateManyDegreePresetInputEnvelope
    set?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    disconnect?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    delete?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    connect?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    update?: DegreePresetModuleUpdateWithWhereUniqueWithoutDegreePresetInput | DegreePresetModuleUpdateWithWhereUniqueWithoutDegreePresetInput[]
    updateMany?: DegreePresetModuleUpdateManyWithWhereWithoutDegreePresetInput | DegreePresetModuleUpdateManyWithWhereWithoutDegreePresetInput[]
    deleteMany?: DegreePresetModuleScalarWhereInput | DegreePresetModuleScalarWhereInput[]
  }

  export type UserPresetUpdateManyWithoutDegreePresetNestedInput = {
    create?: XOR<UserPresetCreateWithoutDegreePresetInput, UserPresetUncheckedCreateWithoutDegreePresetInput> | UserPresetCreateWithoutDegreePresetInput[] | UserPresetUncheckedCreateWithoutDegreePresetInput[]
    connectOrCreate?: UserPresetCreateOrConnectWithoutDegreePresetInput | UserPresetCreateOrConnectWithoutDegreePresetInput[]
    upsert?: UserPresetUpsertWithWhereUniqueWithoutDegreePresetInput | UserPresetUpsertWithWhereUniqueWithoutDegreePresetInput[]
    createMany?: UserPresetCreateManyDegreePresetInputEnvelope
    set?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    disconnect?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    delete?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    connect?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    update?: UserPresetUpdateWithWhereUniqueWithoutDegreePresetInput | UserPresetUpdateWithWhereUniqueWithoutDegreePresetInput[]
    updateMany?: UserPresetUpdateManyWithWhereWithoutDegreePresetInput | UserPresetUpdateManyWithWhereWithoutDegreePresetInput[]
    deleteMany?: UserPresetScalarWhereInput | UserPresetScalarWhereInput[]
  }

  export type UserPlanModuleUncheckedUpdateManyWithoutDegreePresetNestedInput = {
    create?: XOR<UserPlanModuleCreateWithoutDegreePresetInput, UserPlanModuleUncheckedCreateWithoutDegreePresetInput> | UserPlanModuleCreateWithoutDegreePresetInput[] | UserPlanModuleUncheckedCreateWithoutDegreePresetInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutDegreePresetInput | UserPlanModuleCreateOrConnectWithoutDegreePresetInput[]
    upsert?: UserPlanModuleUpsertWithWhereUniqueWithoutDegreePresetInput | UserPlanModuleUpsertWithWhereUniqueWithoutDegreePresetInput[]
    createMany?: UserPlanModuleCreateManyDegreePresetInputEnvelope
    set?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    disconnect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    delete?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    update?: UserPlanModuleUpdateWithWhereUniqueWithoutDegreePresetInput | UserPlanModuleUpdateWithWhereUniqueWithoutDegreePresetInput[]
    updateMany?: UserPlanModuleUpdateManyWithWhereWithoutDegreePresetInput | UserPlanModuleUpdateManyWithWhereWithoutDegreePresetInput[]
    deleteMany?: UserPlanModuleScalarWhereInput | UserPlanModuleScalarWhereInput[]
  }

  export type DegreePresetModuleUncheckedUpdateManyWithoutDegreePresetNestedInput = {
    create?: XOR<DegreePresetModuleCreateWithoutDegreePresetInput, DegreePresetModuleUncheckedCreateWithoutDegreePresetInput> | DegreePresetModuleCreateWithoutDegreePresetInput[] | DegreePresetModuleUncheckedCreateWithoutDegreePresetInput[]
    connectOrCreate?: DegreePresetModuleCreateOrConnectWithoutDegreePresetInput | DegreePresetModuleCreateOrConnectWithoutDegreePresetInput[]
    upsert?: DegreePresetModuleUpsertWithWhereUniqueWithoutDegreePresetInput | DegreePresetModuleUpsertWithWhereUniqueWithoutDegreePresetInput[]
    createMany?: DegreePresetModuleCreateManyDegreePresetInputEnvelope
    set?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    disconnect?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    delete?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    connect?: DegreePresetModuleWhereUniqueInput | DegreePresetModuleWhereUniqueInput[]
    update?: DegreePresetModuleUpdateWithWhereUniqueWithoutDegreePresetInput | DegreePresetModuleUpdateWithWhereUniqueWithoutDegreePresetInput[]
    updateMany?: DegreePresetModuleUpdateManyWithWhereWithoutDegreePresetInput | DegreePresetModuleUpdateManyWithWhereWithoutDegreePresetInput[]
    deleteMany?: DegreePresetModuleScalarWhereInput | DegreePresetModuleScalarWhereInput[]
  }

  export type UserPresetUncheckedUpdateManyWithoutDegreePresetNestedInput = {
    create?: XOR<UserPresetCreateWithoutDegreePresetInput, UserPresetUncheckedCreateWithoutDegreePresetInput> | UserPresetCreateWithoutDegreePresetInput[] | UserPresetUncheckedCreateWithoutDegreePresetInput[]
    connectOrCreate?: UserPresetCreateOrConnectWithoutDegreePresetInput | UserPresetCreateOrConnectWithoutDegreePresetInput[]
    upsert?: UserPresetUpsertWithWhereUniqueWithoutDegreePresetInput | UserPresetUpsertWithWhereUniqueWithoutDegreePresetInput[]
    createMany?: UserPresetCreateManyDegreePresetInputEnvelope
    set?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    disconnect?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    delete?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    connect?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    update?: UserPresetUpdateWithWhereUniqueWithoutDegreePresetInput | UserPresetUpdateWithWhereUniqueWithoutDegreePresetInput[]
    updateMany?: UserPresetUpdateManyWithWhereWithoutDegreePresetInput | UserPresetUpdateManyWithWhereWithoutDegreePresetInput[]
    deleteMany?: UserPresetScalarWhereInput | UserPresetScalarWhereInput[]
  }

  export type DegreePresetCreateNestedOneWithoutModuleLinksInput = {
    create?: XOR<DegreePresetCreateWithoutModuleLinksInput, DegreePresetUncheckedCreateWithoutModuleLinksInput>
    connectOrCreate?: DegreePresetCreateOrConnectWithoutModuleLinksInput
    connect?: DegreePresetWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutDegreePresetLinksInput = {
    create?: XOR<ModuleCreateWithoutDegreePresetLinksInput, ModuleUncheckedCreateWithoutDegreePresetLinksInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutDegreePresetLinksInput
    connect?: ModuleWhereUniqueInput
  }

  export type DegreePresetUpdateOneRequiredWithoutModuleLinksNestedInput = {
    create?: XOR<DegreePresetCreateWithoutModuleLinksInput, DegreePresetUncheckedCreateWithoutModuleLinksInput>
    connectOrCreate?: DegreePresetCreateOrConnectWithoutModuleLinksInput
    upsert?: DegreePresetUpsertWithoutModuleLinksInput
    connect?: DegreePresetWhereUniqueInput
    update?: XOR<XOR<DegreePresetUpdateToOneWithWhereWithoutModuleLinksInput, DegreePresetUpdateWithoutModuleLinksInput>, DegreePresetUncheckedUpdateWithoutModuleLinksInput>
  }

  export type ModuleUpdateOneRequiredWithoutDegreePresetLinksNestedInput = {
    create?: XOR<ModuleCreateWithoutDegreePresetLinksInput, ModuleUncheckedCreateWithoutDegreePresetLinksInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutDegreePresetLinksInput
    upsert?: ModuleUpsertWithoutDegreePresetLinksInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutDegreePresetLinksInput, ModuleUpdateWithoutDegreePresetLinksInput>, ModuleUncheckedUpdateWithoutDegreePresetLinksInput>
  }

  export type UserCreateNestedOneWithoutUserPlanModulesInput = {
    create?: XOR<UserCreateWithoutUserPlanModulesInput, UserUncheckedCreateWithoutUserPlanModulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPlanModulesInput
    connect?: UserWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutUserPlanModulesInput = {
    create?: XOR<ModuleCreateWithoutUserPlanModulesInput, ModuleUncheckedCreateWithoutUserPlanModulesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutUserPlanModulesInput
    connect?: ModuleWhereUniqueInput
  }

  export type DegreePresetCreateNestedOneWithoutUserPlanModulesInput = {
    create?: XOR<DegreePresetCreateWithoutUserPlanModulesInput, DegreePresetUncheckedCreateWithoutUserPlanModulesInput>
    connectOrCreate?: DegreePresetCreateOrConnectWithoutUserPlanModulesInput
    connect?: DegreePresetWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserPlanModulesNestedInput = {
    create?: XOR<UserCreateWithoutUserPlanModulesInput, UserUncheckedCreateWithoutUserPlanModulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPlanModulesInput
    upsert?: UserUpsertWithoutUserPlanModulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPlanModulesInput, UserUpdateWithoutUserPlanModulesInput>, UserUncheckedUpdateWithoutUserPlanModulesInput>
  }

  export type ModuleUpdateOneRequiredWithoutUserPlanModulesNestedInput = {
    create?: XOR<ModuleCreateWithoutUserPlanModulesInput, ModuleUncheckedCreateWithoutUserPlanModulesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutUserPlanModulesInput
    upsert?: ModuleUpsertWithoutUserPlanModulesInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutUserPlanModulesInput, ModuleUpdateWithoutUserPlanModulesInput>, ModuleUncheckedUpdateWithoutUserPlanModulesInput>
  }

  export type DegreePresetUpdateOneWithoutUserPlanModulesNestedInput = {
    create?: XOR<DegreePresetCreateWithoutUserPlanModulesInput, DegreePresetUncheckedCreateWithoutUserPlanModulesInput>
    connectOrCreate?: DegreePresetCreateOrConnectWithoutUserPlanModulesInput
    upsert?: DegreePresetUpsertWithoutUserPlanModulesInput
    disconnect?: DegreePresetWhereInput | boolean
    delete?: DegreePresetWhereInput | boolean
    connect?: DegreePresetWhereUniqueInput
    update?: XOR<XOR<DegreePresetUpdateToOneWithWhereWithoutUserPlanModulesInput, DegreePresetUpdateWithoutUserPlanModulesInput>, DegreePresetUncheckedUpdateWithoutUserPlanModulesInput>
  }

  export type UserCreateNestedOneWithoutUserPresetsInput = {
    create?: XOR<UserCreateWithoutUserPresetsInput, UserUncheckedCreateWithoutUserPresetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPresetsInput
    connect?: UserWhereUniqueInput
  }

  export type DegreePresetCreateNestedOneWithoutUserPresetsInput = {
    create?: XOR<DegreePresetCreateWithoutUserPresetsInput, DegreePresetUncheckedCreateWithoutUserPresetsInput>
    connectOrCreate?: DegreePresetCreateOrConnectWithoutUserPresetsInput
    connect?: DegreePresetWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutUserPresetsNestedInput = {
    create?: XOR<UserCreateWithoutUserPresetsInput, UserUncheckedCreateWithoutUserPresetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPresetsInput
    upsert?: UserUpsertWithoutUserPresetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPresetsInput, UserUpdateWithoutUserPresetsInput>, UserUncheckedUpdateWithoutUserPresetsInput>
  }

  export type DegreePresetUpdateOneRequiredWithoutUserPresetsNestedInput = {
    create?: XOR<DegreePresetCreateWithoutUserPresetsInput, DegreePresetUncheckedCreateWithoutUserPresetsInput>
    connectOrCreate?: DegreePresetCreateOrConnectWithoutUserPresetsInput
    upsert?: DegreePresetUpsertWithoutUserPresetsInput
    connect?: DegreePresetWhereUniqueInput
    update?: XOR<XOR<DegreePresetUpdateToOneWithWhereWithoutUserPresetsInput, DegreePresetUpdateWithoutUserPresetsInput>, DegreePresetUncheckedUpdateWithoutUserPresetsInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserPlanModuleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPlanModuleCreateWithoutUserInput, UserPlanModuleUncheckedCreateWithoutUserInput> | UserPlanModuleCreateWithoutUserInput[] | UserPlanModuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutUserInput | UserPlanModuleCreateOrConnectWithoutUserInput[]
    createMany?: UserPlanModuleCreateManyUserInputEnvelope
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
  }

  export type UserPresetCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPresetCreateWithoutUserInput, UserPresetUncheckedCreateWithoutUserInput> | UserPresetCreateWithoutUserInput[] | UserPresetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPresetCreateOrConnectWithoutUserInput | UserPresetCreateOrConnectWithoutUserInput[]
    createMany?: UserPresetCreateManyUserInputEnvelope
    connect?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserPlanModuleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPlanModuleCreateWithoutUserInput, UserPlanModuleUncheckedCreateWithoutUserInput> | UserPlanModuleCreateWithoutUserInput[] | UserPlanModuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutUserInput | UserPlanModuleCreateOrConnectWithoutUserInput[]
    createMany?: UserPlanModuleCreateManyUserInputEnvelope
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
  }

  export type UserPresetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPresetCreateWithoutUserInput, UserPresetUncheckedCreateWithoutUserInput> | UserPresetCreateWithoutUserInput[] | UserPresetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPresetCreateOrConnectWithoutUserInput | UserPresetCreateOrConnectWithoutUserInput[]
    createMany?: UserPresetCreateManyUserInputEnvelope
    connect?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserPlanModuleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPlanModuleCreateWithoutUserInput, UserPlanModuleUncheckedCreateWithoutUserInput> | UserPlanModuleCreateWithoutUserInput[] | UserPlanModuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutUserInput | UserPlanModuleCreateOrConnectWithoutUserInput[]
    upsert?: UserPlanModuleUpsertWithWhereUniqueWithoutUserInput | UserPlanModuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPlanModuleCreateManyUserInputEnvelope
    set?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    disconnect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    delete?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    update?: UserPlanModuleUpdateWithWhereUniqueWithoutUserInput | UserPlanModuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPlanModuleUpdateManyWithWhereWithoutUserInput | UserPlanModuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPlanModuleScalarWhereInput | UserPlanModuleScalarWhereInput[]
  }

  export type UserPresetUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPresetCreateWithoutUserInput, UserPresetUncheckedCreateWithoutUserInput> | UserPresetCreateWithoutUserInput[] | UserPresetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPresetCreateOrConnectWithoutUserInput | UserPresetCreateOrConnectWithoutUserInput[]
    upsert?: UserPresetUpsertWithWhereUniqueWithoutUserInput | UserPresetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPresetCreateManyUserInputEnvelope
    set?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    disconnect?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    delete?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    connect?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    update?: UserPresetUpdateWithWhereUniqueWithoutUserInput | UserPresetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPresetUpdateManyWithWhereWithoutUserInput | UserPresetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPresetScalarWhereInput | UserPresetScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserPlanModuleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPlanModuleCreateWithoutUserInput, UserPlanModuleUncheckedCreateWithoutUserInput> | UserPlanModuleCreateWithoutUserInput[] | UserPlanModuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlanModuleCreateOrConnectWithoutUserInput | UserPlanModuleCreateOrConnectWithoutUserInput[]
    upsert?: UserPlanModuleUpsertWithWhereUniqueWithoutUserInput | UserPlanModuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPlanModuleCreateManyUserInputEnvelope
    set?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    disconnect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    delete?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    connect?: UserPlanModuleWhereUniqueInput | UserPlanModuleWhereUniqueInput[]
    update?: UserPlanModuleUpdateWithWhereUniqueWithoutUserInput | UserPlanModuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPlanModuleUpdateManyWithWhereWithoutUserInput | UserPlanModuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPlanModuleScalarWhereInput | UserPlanModuleScalarWhereInput[]
  }

  export type UserPresetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPresetCreateWithoutUserInput, UserPresetUncheckedCreateWithoutUserInput> | UserPresetCreateWithoutUserInput[] | UserPresetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPresetCreateOrConnectWithoutUserInput | UserPresetCreateOrConnectWithoutUserInput[]
    upsert?: UserPresetUpsertWithWhereUniqueWithoutUserInput | UserPresetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPresetCreateManyUserInputEnvelope
    set?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    disconnect?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    delete?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    connect?: UserPresetWhereUniqueInput | UserPresetWhereUniqueInput[]
    update?: UserPresetUpdateWithWhereUniqueWithoutUserInput | UserPresetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPresetUpdateManyWithWhereWithoutUserInput | UserPresetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPresetScalarWhereInput | UserPresetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserPlanModuleCreateWithoutModuleInput = {
    id?: string
    planYear: number
    planSemester: number
    isPresetModule?: boolean
    user: UserCreateNestedOneWithoutUserPlanModulesInput
    degreePreset?: DegreePresetCreateNestedOneWithoutUserPlanModulesInput
  }

  export type UserPlanModuleUncheckedCreateWithoutModuleInput = {
    id?: string
    userId: string
    planYear: number
    planSemester: number
    isPresetModule?: boolean
    degreePresetId?: string | null
  }

  export type UserPlanModuleCreateOrConnectWithoutModuleInput = {
    where: UserPlanModuleWhereUniqueInput
    create: XOR<UserPlanModuleCreateWithoutModuleInput, UserPlanModuleUncheckedCreateWithoutModuleInput>
  }

  export type UserPlanModuleCreateManyModuleInputEnvelope = {
    data: UserPlanModuleCreateManyModuleInput | UserPlanModuleCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type DegreePresetModuleCreateWithoutModuleInput = {
    degreePreset: DegreePresetCreateNestedOneWithoutModuleLinksInput
  }

  export type DegreePresetModuleUncheckedCreateWithoutModuleInput = {
    degreePresetId: string
  }

  export type DegreePresetModuleCreateOrConnectWithoutModuleInput = {
    where: DegreePresetModuleWhereUniqueInput
    create: XOR<DegreePresetModuleCreateWithoutModuleInput, DegreePresetModuleUncheckedCreateWithoutModuleInput>
  }

  export type DegreePresetModuleCreateManyModuleInputEnvelope = {
    data: DegreePresetModuleCreateManyModuleInput | DegreePresetModuleCreateManyModuleInput[]
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
    planYear?: IntFilter<"UserPlanModule"> | number
    planSemester?: IntFilter<"UserPlanModule"> | number
    isPresetModule?: BoolFilter<"UserPlanModule"> | boolean
    degreePresetId?: StringNullableFilter<"UserPlanModule"> | string | null
  }

  export type DegreePresetModuleUpsertWithWhereUniqueWithoutModuleInput = {
    where: DegreePresetModuleWhereUniqueInput
    update: XOR<DegreePresetModuleUpdateWithoutModuleInput, DegreePresetModuleUncheckedUpdateWithoutModuleInput>
    create: XOR<DegreePresetModuleCreateWithoutModuleInput, DegreePresetModuleUncheckedCreateWithoutModuleInput>
  }

  export type DegreePresetModuleUpdateWithWhereUniqueWithoutModuleInput = {
    where: DegreePresetModuleWhereUniqueInput
    data: XOR<DegreePresetModuleUpdateWithoutModuleInput, DegreePresetModuleUncheckedUpdateWithoutModuleInput>
  }

  export type DegreePresetModuleUpdateManyWithWhereWithoutModuleInput = {
    where: DegreePresetModuleScalarWhereInput
    data: XOR<DegreePresetModuleUpdateManyMutationInput, DegreePresetModuleUncheckedUpdateManyWithoutModuleInput>
  }

  export type DegreePresetModuleScalarWhereInput = {
    AND?: DegreePresetModuleScalarWhereInput | DegreePresetModuleScalarWhereInput[]
    OR?: DegreePresetModuleScalarWhereInput[]
    NOT?: DegreePresetModuleScalarWhereInput | DegreePresetModuleScalarWhereInput[]
    degreePresetId?: StringFilter<"DegreePresetModule"> | string
    moduleId?: StringFilter<"DegreePresetModule"> | string
  }

  export type UserPlanModuleCreateWithoutDegreePresetInput = {
    id?: string
    planYear: number
    planSemester: number
    isPresetModule?: boolean
    user: UserCreateNestedOneWithoutUserPlanModulesInput
    module: ModuleCreateNestedOneWithoutUserPlanModulesInput
  }

  export type UserPlanModuleUncheckedCreateWithoutDegreePresetInput = {
    id?: string
    userId: string
    moduleId: string
    planYear: number
    planSemester: number
    isPresetModule?: boolean
  }

  export type UserPlanModuleCreateOrConnectWithoutDegreePresetInput = {
    where: UserPlanModuleWhereUniqueInput
    create: XOR<UserPlanModuleCreateWithoutDegreePresetInput, UserPlanModuleUncheckedCreateWithoutDegreePresetInput>
  }

  export type UserPlanModuleCreateManyDegreePresetInputEnvelope = {
    data: UserPlanModuleCreateManyDegreePresetInput | UserPlanModuleCreateManyDegreePresetInput[]
    skipDuplicates?: boolean
  }

  export type DegreePresetModuleCreateWithoutDegreePresetInput = {
    module: ModuleCreateNestedOneWithoutDegreePresetLinksInput
  }

  export type DegreePresetModuleUncheckedCreateWithoutDegreePresetInput = {
    moduleId: string
  }

  export type DegreePresetModuleCreateOrConnectWithoutDegreePresetInput = {
    where: DegreePresetModuleWhereUniqueInput
    create: XOR<DegreePresetModuleCreateWithoutDegreePresetInput, DegreePresetModuleUncheckedCreateWithoutDegreePresetInput>
  }

  export type DegreePresetModuleCreateManyDegreePresetInputEnvelope = {
    data: DegreePresetModuleCreateManyDegreePresetInput | DegreePresetModuleCreateManyDegreePresetInput[]
    skipDuplicates?: boolean
  }

  export type UserPresetCreateWithoutDegreePresetInput = {
    importedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPresetsInput
  }

  export type UserPresetUncheckedCreateWithoutDegreePresetInput = {
    userId: string
    importedAt?: Date | string
  }

  export type UserPresetCreateOrConnectWithoutDegreePresetInput = {
    where: UserPresetWhereUniqueInput
    create: XOR<UserPresetCreateWithoutDegreePresetInput, UserPresetUncheckedCreateWithoutDegreePresetInput>
  }

  export type UserPresetCreateManyDegreePresetInputEnvelope = {
    data: UserPresetCreateManyDegreePresetInput | UserPresetCreateManyDegreePresetInput[]
    skipDuplicates?: boolean
  }

  export type UserPlanModuleUpsertWithWhereUniqueWithoutDegreePresetInput = {
    where: UserPlanModuleWhereUniqueInput
    update: XOR<UserPlanModuleUpdateWithoutDegreePresetInput, UserPlanModuleUncheckedUpdateWithoutDegreePresetInput>
    create: XOR<UserPlanModuleCreateWithoutDegreePresetInput, UserPlanModuleUncheckedCreateWithoutDegreePresetInput>
  }

  export type UserPlanModuleUpdateWithWhereUniqueWithoutDegreePresetInput = {
    where: UserPlanModuleWhereUniqueInput
    data: XOR<UserPlanModuleUpdateWithoutDegreePresetInput, UserPlanModuleUncheckedUpdateWithoutDegreePresetInput>
  }

  export type UserPlanModuleUpdateManyWithWhereWithoutDegreePresetInput = {
    where: UserPlanModuleScalarWhereInput
    data: XOR<UserPlanModuleUpdateManyMutationInput, UserPlanModuleUncheckedUpdateManyWithoutDegreePresetInput>
  }

  export type DegreePresetModuleUpsertWithWhereUniqueWithoutDegreePresetInput = {
    where: DegreePresetModuleWhereUniqueInput
    update: XOR<DegreePresetModuleUpdateWithoutDegreePresetInput, DegreePresetModuleUncheckedUpdateWithoutDegreePresetInput>
    create: XOR<DegreePresetModuleCreateWithoutDegreePresetInput, DegreePresetModuleUncheckedCreateWithoutDegreePresetInput>
  }

  export type DegreePresetModuleUpdateWithWhereUniqueWithoutDegreePresetInput = {
    where: DegreePresetModuleWhereUniqueInput
    data: XOR<DegreePresetModuleUpdateWithoutDegreePresetInput, DegreePresetModuleUncheckedUpdateWithoutDegreePresetInput>
  }

  export type DegreePresetModuleUpdateManyWithWhereWithoutDegreePresetInput = {
    where: DegreePresetModuleScalarWhereInput
    data: XOR<DegreePresetModuleUpdateManyMutationInput, DegreePresetModuleUncheckedUpdateManyWithoutDegreePresetInput>
  }

  export type UserPresetUpsertWithWhereUniqueWithoutDegreePresetInput = {
    where: UserPresetWhereUniqueInput
    update: XOR<UserPresetUpdateWithoutDegreePresetInput, UserPresetUncheckedUpdateWithoutDegreePresetInput>
    create: XOR<UserPresetCreateWithoutDegreePresetInput, UserPresetUncheckedCreateWithoutDegreePresetInput>
  }

  export type UserPresetUpdateWithWhereUniqueWithoutDegreePresetInput = {
    where: UserPresetWhereUniqueInput
    data: XOR<UserPresetUpdateWithoutDegreePresetInput, UserPresetUncheckedUpdateWithoutDegreePresetInput>
  }

  export type UserPresetUpdateManyWithWhereWithoutDegreePresetInput = {
    where: UserPresetScalarWhereInput
    data: XOR<UserPresetUpdateManyMutationInput, UserPresetUncheckedUpdateManyWithoutDegreePresetInput>
  }

  export type UserPresetScalarWhereInput = {
    AND?: UserPresetScalarWhereInput | UserPresetScalarWhereInput[]
    OR?: UserPresetScalarWhereInput[]
    NOT?: UserPresetScalarWhereInput | UserPresetScalarWhereInput[]
    userId?: StringFilter<"UserPreset"> | string
    degreePresetId?: StringFilter<"UserPreset"> | string
    importedAt?: DateTimeFilter<"UserPreset"> | Date | string
  }

  export type DegreePresetCreateWithoutModuleLinksInput = {
    id?: string
    degreeCode: string
    degreeName: string
    userPlanModules?: UserPlanModuleCreateNestedManyWithoutDegreePresetInput
    userPresets?: UserPresetCreateNestedManyWithoutDegreePresetInput
  }

  export type DegreePresetUncheckedCreateWithoutModuleLinksInput = {
    id?: string
    degreeCode: string
    degreeName: string
    userPlanModules?: UserPlanModuleUncheckedCreateNestedManyWithoutDegreePresetInput
    userPresets?: UserPresetUncheckedCreateNestedManyWithoutDegreePresetInput
  }

  export type DegreePresetCreateOrConnectWithoutModuleLinksInput = {
    where: DegreePresetWhereUniqueInput
    create: XOR<DegreePresetCreateWithoutModuleLinksInput, DegreePresetUncheckedCreateWithoutModuleLinksInput>
  }

  export type ModuleCreateWithoutDegreePresetLinksInput = {
    id: string
    title: string
    description?: string | null
    department?: string | null
    workload?: number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: string | null
    prerequisite?: string | null
    fulfillreqs?: ModuleCreatefulfillreqsInput | string[]
    userPlanModules?: UserPlanModuleCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutDegreePresetLinksInput = {
    id: string
    title: string
    description?: string | null
    department?: string | null
    workload?: number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: string | null
    prerequisite?: string | null
    fulfillreqs?: ModuleCreatefulfillreqsInput | string[]
    userPlanModules?: UserPlanModuleUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutDegreePresetLinksInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutDegreePresetLinksInput, ModuleUncheckedCreateWithoutDegreePresetLinksInput>
  }

  export type DegreePresetUpsertWithoutModuleLinksInput = {
    update: XOR<DegreePresetUpdateWithoutModuleLinksInput, DegreePresetUncheckedUpdateWithoutModuleLinksInput>
    create: XOR<DegreePresetCreateWithoutModuleLinksInput, DegreePresetUncheckedCreateWithoutModuleLinksInput>
    where?: DegreePresetWhereInput
  }

  export type DegreePresetUpdateToOneWithWhereWithoutModuleLinksInput = {
    where?: DegreePresetWhereInput
    data: XOR<DegreePresetUpdateWithoutModuleLinksInput, DegreePresetUncheckedUpdateWithoutModuleLinksInput>
  }

  export type DegreePresetUpdateWithoutModuleLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    degreeCode?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    userPlanModules?: UserPlanModuleUpdateManyWithoutDegreePresetNestedInput
    userPresets?: UserPresetUpdateManyWithoutDegreePresetNestedInput
  }

  export type DegreePresetUncheckedUpdateWithoutModuleLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    degreeCode?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    userPlanModules?: UserPlanModuleUncheckedUpdateManyWithoutDegreePresetNestedInput
    userPresets?: UserPresetUncheckedUpdateManyWithoutDegreePresetNestedInput
  }

  export type ModuleUpsertWithoutDegreePresetLinksInput = {
    update: XOR<ModuleUpdateWithoutDegreePresetLinksInput, ModuleUncheckedUpdateWithoutDegreePresetLinksInput>
    create: XOR<ModuleCreateWithoutDegreePresetLinksInput, ModuleUncheckedCreateWithoutDegreePresetLinksInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutDegreePresetLinksInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutDegreePresetLinksInput, ModuleUncheckedUpdateWithoutDegreePresetLinksInput>
  }

  export type ModuleUpdateWithoutDegreePresetLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: NullableStringFieldUpdateOperationsInput | string | null
    prerequisite?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillreqs?: ModuleUpdatefulfillreqsInput | string[]
    userPlanModules?: UserPlanModuleUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutDegreePresetLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: NullableStringFieldUpdateOperationsInput | string | null
    prerequisite?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillreqs?: ModuleUpdatefulfillreqsInput | string[]
    userPlanModules?: UserPlanModuleUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type UserCreateWithoutUserPlanModulesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    userPresets?: UserPresetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPlanModulesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userPresets?: UserPresetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPlanModulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPlanModulesInput, UserUncheckedCreateWithoutUserPlanModulesInput>
  }

  export type ModuleCreateWithoutUserPlanModulesInput = {
    id: string
    title: string
    description?: string | null
    department?: string | null
    workload?: number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: string | null
    prerequisite?: string | null
    fulfillreqs?: ModuleCreatefulfillreqsInput | string[]
    degreePresetLinks?: DegreePresetModuleCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutUserPlanModulesInput = {
    id: string
    title: string
    description?: string | null
    department?: string | null
    workload?: number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: string | null
    prerequisite?: string | null
    fulfillreqs?: ModuleCreatefulfillreqsInput | string[]
    degreePresetLinks?: DegreePresetModuleUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutUserPlanModulesInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutUserPlanModulesInput, ModuleUncheckedCreateWithoutUserPlanModulesInput>
  }

  export type DegreePresetCreateWithoutUserPlanModulesInput = {
    id?: string
    degreeCode: string
    degreeName: string
    moduleLinks?: DegreePresetModuleCreateNestedManyWithoutDegreePresetInput
    userPresets?: UserPresetCreateNestedManyWithoutDegreePresetInput
  }

  export type DegreePresetUncheckedCreateWithoutUserPlanModulesInput = {
    id?: string
    degreeCode: string
    degreeName: string
    moduleLinks?: DegreePresetModuleUncheckedCreateNestedManyWithoutDegreePresetInput
    userPresets?: UserPresetUncheckedCreateNestedManyWithoutDegreePresetInput
  }

  export type DegreePresetCreateOrConnectWithoutUserPlanModulesInput = {
    where: DegreePresetWhereUniqueInput
    create: XOR<DegreePresetCreateWithoutUserPlanModulesInput, DegreePresetUncheckedCreateWithoutUserPlanModulesInput>
  }

  export type UserUpsertWithoutUserPlanModulesInput = {
    update: XOR<UserUpdateWithoutUserPlanModulesInput, UserUncheckedUpdateWithoutUserPlanModulesInput>
    create: XOR<UserCreateWithoutUserPlanModulesInput, UserUncheckedCreateWithoutUserPlanModulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPlanModulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPlanModulesInput, UserUncheckedUpdateWithoutUserPlanModulesInput>
  }

  export type UserUpdateWithoutUserPlanModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userPresets?: UserPresetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPlanModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userPresets?: UserPresetUncheckedUpdateManyWithoutUserNestedInput
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
    preclusion?: NullableStringFieldUpdateOperationsInput | string | null
    prerequisite?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillreqs?: ModuleUpdatefulfillreqsInput | string[]
    degreePresetLinks?: DegreePresetModuleUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutUserPlanModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableFloatFieldUpdateOperationsInput | number | null
    prereqTree?: NullableJsonNullValueInput | InputJsonValue
    preclusion?: NullableStringFieldUpdateOperationsInput | string | null
    prerequisite?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillreqs?: ModuleUpdatefulfillreqsInput | string[]
    degreePresetLinks?: DegreePresetModuleUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type DegreePresetUpsertWithoutUserPlanModulesInput = {
    update: XOR<DegreePresetUpdateWithoutUserPlanModulesInput, DegreePresetUncheckedUpdateWithoutUserPlanModulesInput>
    create: XOR<DegreePresetCreateWithoutUserPlanModulesInput, DegreePresetUncheckedCreateWithoutUserPlanModulesInput>
    where?: DegreePresetWhereInput
  }

  export type DegreePresetUpdateToOneWithWhereWithoutUserPlanModulesInput = {
    where?: DegreePresetWhereInput
    data: XOR<DegreePresetUpdateWithoutUserPlanModulesInput, DegreePresetUncheckedUpdateWithoutUserPlanModulesInput>
  }

  export type DegreePresetUpdateWithoutUserPlanModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    degreeCode?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    moduleLinks?: DegreePresetModuleUpdateManyWithoutDegreePresetNestedInput
    userPresets?: UserPresetUpdateManyWithoutDegreePresetNestedInput
  }

  export type DegreePresetUncheckedUpdateWithoutUserPlanModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    degreeCode?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    moduleLinks?: DegreePresetModuleUncheckedUpdateManyWithoutDegreePresetNestedInput
    userPresets?: UserPresetUncheckedUpdateManyWithoutDegreePresetNestedInput
  }

  export type UserCreateWithoutUserPresetsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    userPlanModules?: UserPlanModuleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPresetsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userPlanModules?: UserPlanModuleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPresetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPresetsInput, UserUncheckedCreateWithoutUserPresetsInput>
  }

  export type DegreePresetCreateWithoutUserPresetsInput = {
    id?: string
    degreeCode: string
    degreeName: string
    userPlanModules?: UserPlanModuleCreateNestedManyWithoutDegreePresetInput
    moduleLinks?: DegreePresetModuleCreateNestedManyWithoutDegreePresetInput
  }

  export type DegreePresetUncheckedCreateWithoutUserPresetsInput = {
    id?: string
    degreeCode: string
    degreeName: string
    userPlanModules?: UserPlanModuleUncheckedCreateNestedManyWithoutDegreePresetInput
    moduleLinks?: DegreePresetModuleUncheckedCreateNestedManyWithoutDegreePresetInput
  }

  export type DegreePresetCreateOrConnectWithoutUserPresetsInput = {
    where: DegreePresetWhereUniqueInput
    create: XOR<DegreePresetCreateWithoutUserPresetsInput, DegreePresetUncheckedCreateWithoutUserPresetsInput>
  }

  export type UserUpsertWithoutUserPresetsInput = {
    update: XOR<UserUpdateWithoutUserPresetsInput, UserUncheckedUpdateWithoutUserPresetsInput>
    create: XOR<UserCreateWithoutUserPresetsInput, UserUncheckedCreateWithoutUserPresetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPresetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPresetsInput, UserUncheckedUpdateWithoutUserPresetsInput>
  }

  export type UserUpdateWithoutUserPresetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userPlanModules?: UserPlanModuleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPresetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userPlanModules?: UserPlanModuleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DegreePresetUpsertWithoutUserPresetsInput = {
    update: XOR<DegreePresetUpdateWithoutUserPresetsInput, DegreePresetUncheckedUpdateWithoutUserPresetsInput>
    create: XOR<DegreePresetCreateWithoutUserPresetsInput, DegreePresetUncheckedCreateWithoutUserPresetsInput>
    where?: DegreePresetWhereInput
  }

  export type DegreePresetUpdateToOneWithWhereWithoutUserPresetsInput = {
    where?: DegreePresetWhereInput
    data: XOR<DegreePresetUpdateWithoutUserPresetsInput, DegreePresetUncheckedUpdateWithoutUserPresetsInput>
  }

  export type DegreePresetUpdateWithoutUserPresetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    degreeCode?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    userPlanModules?: UserPlanModuleUpdateManyWithoutDegreePresetNestedInput
    moduleLinks?: DegreePresetModuleUpdateManyWithoutDegreePresetNestedInput
  }

  export type DegreePresetUncheckedUpdateWithoutUserPresetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    degreeCode?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    userPlanModules?: UserPlanModuleUncheckedUpdateManyWithoutDegreePresetNestedInput
    moduleLinks?: DegreePresetModuleUncheckedUpdateManyWithoutDegreePresetNestedInput
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPlanModuleCreateWithoutUserInput = {
    id?: string
    planYear: number
    planSemester: number
    isPresetModule?: boolean
    module: ModuleCreateNestedOneWithoutUserPlanModulesInput
    degreePreset?: DegreePresetCreateNestedOneWithoutUserPlanModulesInput
  }

  export type UserPlanModuleUncheckedCreateWithoutUserInput = {
    id?: string
    moduleId: string
    planYear: number
    planSemester: number
    isPresetModule?: boolean
    degreePresetId?: string | null
  }

  export type UserPlanModuleCreateOrConnectWithoutUserInput = {
    where: UserPlanModuleWhereUniqueInput
    create: XOR<UserPlanModuleCreateWithoutUserInput, UserPlanModuleUncheckedCreateWithoutUserInput>
  }

  export type UserPlanModuleCreateManyUserInputEnvelope = {
    data: UserPlanModuleCreateManyUserInput | UserPlanModuleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPresetCreateWithoutUserInput = {
    importedAt?: Date | string
    degreePreset: DegreePresetCreateNestedOneWithoutUserPresetsInput
  }

  export type UserPresetUncheckedCreateWithoutUserInput = {
    degreePresetId: string
    importedAt?: Date | string
  }

  export type UserPresetCreateOrConnectWithoutUserInput = {
    where: UserPresetWhereUniqueInput
    create: XOR<UserPresetCreateWithoutUserInput, UserPresetUncheckedCreateWithoutUserInput>
  }

  export type UserPresetCreateManyUserInputEnvelope = {
    data: UserPresetCreateManyUserInput | UserPresetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserPlanModuleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPlanModuleWhereUniqueInput
    update: XOR<UserPlanModuleUpdateWithoutUserInput, UserPlanModuleUncheckedUpdateWithoutUserInput>
    create: XOR<UserPlanModuleCreateWithoutUserInput, UserPlanModuleUncheckedCreateWithoutUserInput>
  }

  export type UserPlanModuleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPlanModuleWhereUniqueInput
    data: XOR<UserPlanModuleUpdateWithoutUserInput, UserPlanModuleUncheckedUpdateWithoutUserInput>
  }

  export type UserPlanModuleUpdateManyWithWhereWithoutUserInput = {
    where: UserPlanModuleScalarWhereInput
    data: XOR<UserPlanModuleUpdateManyMutationInput, UserPlanModuleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPresetUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPresetWhereUniqueInput
    update: XOR<UserPresetUpdateWithoutUserInput, UserPresetUncheckedUpdateWithoutUserInput>
    create: XOR<UserPresetCreateWithoutUserInput, UserPresetUncheckedCreateWithoutUserInput>
  }

  export type UserPresetUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPresetWhereUniqueInput
    data: XOR<UserPresetUpdateWithoutUserInput, UserPresetUncheckedUpdateWithoutUserInput>
  }

  export type UserPresetUpdateManyWithWhereWithoutUserInput = {
    where: UserPresetScalarWhereInput
    data: XOR<UserPresetUpdateManyMutationInput, UserPresetUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    userPlanModules?: UserPlanModuleCreateNestedManyWithoutUserInput
    userPresets?: UserPresetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userPlanModules?: UserPlanModuleUncheckedCreateNestedManyWithoutUserInput
    userPresets?: UserPresetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userPlanModules?: UserPlanModuleUpdateManyWithoutUserNestedInput
    userPresets?: UserPresetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userPlanModules?: UserPlanModuleUncheckedUpdateManyWithoutUserNestedInput
    userPresets?: UserPresetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    userPlanModules?: UserPlanModuleCreateNestedManyWithoutUserInput
    userPresets?: UserPresetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userPlanModules?: UserPlanModuleUncheckedCreateNestedManyWithoutUserInput
    userPresets?: UserPresetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userPlanModules?: UserPlanModuleUpdateManyWithoutUserNestedInput
    userPresets?: UserPresetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userPlanModules?: UserPlanModuleUncheckedUpdateManyWithoutUserNestedInput
    userPresets?: UserPresetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserPlanModuleCreateManyModuleInput = {
    id?: string
    userId: string
    planYear: number
    planSemester: number
    isPresetModule?: boolean
    degreePresetId?: string | null
  }

  export type DegreePresetModuleCreateManyModuleInput = {
    degreePresetId: string
  }

  export type UserPlanModuleUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserPlanModulesNestedInput
    degreePreset?: DegreePresetUpdateOneWithoutUserPlanModulesNestedInput
  }

  export type UserPlanModuleUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
    degreePresetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPlanModuleUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
    degreePresetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DegreePresetModuleUpdateWithoutModuleInput = {
    degreePreset?: DegreePresetUpdateOneRequiredWithoutModuleLinksNestedInput
  }

  export type DegreePresetModuleUncheckedUpdateWithoutModuleInput = {
    degreePresetId?: StringFieldUpdateOperationsInput | string
  }

  export type DegreePresetModuleUncheckedUpdateManyWithoutModuleInput = {
    degreePresetId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPlanModuleCreateManyDegreePresetInput = {
    id?: string
    userId: string
    moduleId: string
    planYear: number
    planSemester: number
    isPresetModule?: boolean
  }

  export type DegreePresetModuleCreateManyDegreePresetInput = {
    moduleId: string
  }

  export type UserPresetCreateManyDegreePresetInput = {
    userId: string
    importedAt?: Date | string
  }

  export type UserPlanModuleUpdateWithoutDegreePresetInput = {
    id?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserPlanModulesNestedInput
    module?: ModuleUpdateOneRequiredWithoutUserPlanModulesNestedInput
  }

  export type UserPlanModuleUncheckedUpdateWithoutDegreePresetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPlanModuleUncheckedUpdateManyWithoutDegreePresetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DegreePresetModuleUpdateWithoutDegreePresetInput = {
    module?: ModuleUpdateOneRequiredWithoutDegreePresetLinksNestedInput
  }

  export type DegreePresetModuleUncheckedUpdateWithoutDegreePresetInput = {
    moduleId?: StringFieldUpdateOperationsInput | string
  }

  export type DegreePresetModuleUncheckedUpdateManyWithoutDegreePresetInput = {
    moduleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPresetUpdateWithoutDegreePresetInput = {
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPresetsNestedInput
  }

  export type UserPresetUncheckedUpdateWithoutDegreePresetInput = {
    userId?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPresetUncheckedUpdateManyWithoutDegreePresetInput = {
    userId?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlanModuleCreateManyUserInput = {
    id?: string
    moduleId: string
    planYear: number
    planSemester: number
    isPresetModule?: boolean
    degreePresetId?: string | null
  }

  export type UserPresetCreateManyUserInput = {
    degreePresetId: string
    importedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlanModuleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
    module?: ModuleUpdateOneRequiredWithoutUserPlanModulesNestedInput
    degreePreset?: DegreePresetUpdateOneWithoutUserPlanModulesNestedInput
  }

  export type UserPlanModuleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
    degreePresetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPlanModuleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    planYear?: IntFieldUpdateOperationsInput | number
    planSemester?: IntFieldUpdateOperationsInput | number
    isPresetModule?: BoolFieldUpdateOperationsInput | boolean
    degreePresetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPresetUpdateWithoutUserInput = {
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    degreePreset?: DegreePresetUpdateOneRequiredWithoutUserPresetsNestedInput
  }

  export type UserPresetUncheckedUpdateWithoutUserInput = {
    degreePresetId?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPresetUncheckedUpdateManyWithoutUserInput = {
    degreePresetId?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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