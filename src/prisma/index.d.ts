
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model a0_task
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type a0_task = $Result.DefaultSelection<Prisma.$a0_taskPayload>
/**
 * Model b1_comment
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type b1_comment = $Result.DefaultSelection<Prisma.$b1_commentPayload>
/**
 * Model stc_category
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type stc_category = $Result.DefaultSelection<Prisma.$stc_categoryPayload>
/**
 * Model stc_priority
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type stc_priority = $Result.DefaultSelection<Prisma.$stc_priorityPayload>
/**
 * Model stc_status
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type stc_status = $Result.DefaultSelection<Prisma.$stc_statusPayload>
/**
 * Model z_task_history
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type z_task_history = $Result.DefaultSelection<Prisma.$z_task_historyPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more A0_tasks
 * const a0_tasks = await prisma.a0_task.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more A0_tasks
   * const a0_tasks = await prisma.a0_task.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.a0_task`: Exposes CRUD operations for the **a0_task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more A0_tasks
    * const a0_tasks = await prisma.a0_task.findMany()
    * ```
    */
  get a0_task(): Prisma.a0_taskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.b1_comment`: Exposes CRUD operations for the **b1_comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more B1_comments
    * const b1_comments = await prisma.b1_comment.findMany()
    * ```
    */
  get b1_comment(): Prisma.b1_commentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stc_category`: Exposes CRUD operations for the **stc_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stc_categories
    * const stc_categories = await prisma.stc_category.findMany()
    * ```
    */
  get stc_category(): Prisma.stc_categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stc_priority`: Exposes CRUD operations for the **stc_priority** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stc_priorities
    * const stc_priorities = await prisma.stc_priority.findMany()
    * ```
    */
  get stc_priority(): Prisma.stc_priorityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stc_status`: Exposes CRUD operations for the **stc_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stc_statuses
    * const stc_statuses = await prisma.stc_status.findMany()
    * ```
    */
  get stc_status(): Prisma.stc_statusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.z_task_history`: Exposes CRUD operations for the **z_task_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Z_task_histories
    * const z_task_histories = await prisma.z_task_history.findMany()
    * ```
    */
  get z_task_history(): Prisma.z_task_historyDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    a0_task: 'a0_task',
    b1_comment: 'b1_comment',
    stc_category: 'stc_category',
    stc_priority: 'stc_priority',
    stc_status: 'stc_status',
    z_task_history: 'z_task_history'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "a0_task" | "b1_comment" | "stc_category" | "stc_priority" | "stc_status" | "z_task_history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      a0_task: {
        payload: Prisma.$a0_taskPayload<ExtArgs>
        fields: Prisma.a0_taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.a0_taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$a0_taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.a0_taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$a0_taskPayload>
          }
          findFirst: {
            args: Prisma.a0_taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$a0_taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.a0_taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$a0_taskPayload>
          }
          findMany: {
            args: Prisma.a0_taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$a0_taskPayload>[]
          }
          create: {
            args: Prisma.a0_taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$a0_taskPayload>
          }
          createMany: {
            args: Prisma.a0_taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.a0_taskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$a0_taskPayload>[]
          }
          delete: {
            args: Prisma.a0_taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$a0_taskPayload>
          }
          update: {
            args: Prisma.a0_taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$a0_taskPayload>
          }
          deleteMany: {
            args: Prisma.a0_taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.a0_taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.a0_taskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$a0_taskPayload>[]
          }
          upsert: {
            args: Prisma.a0_taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$a0_taskPayload>
          }
          aggregate: {
            args: Prisma.A0_taskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateA0_task>
          }
          groupBy: {
            args: Prisma.a0_taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<A0_taskGroupByOutputType>[]
          }
          count: {
            args: Prisma.a0_taskCountArgs<ExtArgs>
            result: $Utils.Optional<A0_taskCountAggregateOutputType> | number
          }
        }
      }
      b1_comment: {
        payload: Prisma.$b1_commentPayload<ExtArgs>
        fields: Prisma.b1_commentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.b1_commentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$b1_commentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.b1_commentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$b1_commentPayload>
          }
          findFirst: {
            args: Prisma.b1_commentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$b1_commentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.b1_commentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$b1_commentPayload>
          }
          findMany: {
            args: Prisma.b1_commentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$b1_commentPayload>[]
          }
          create: {
            args: Prisma.b1_commentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$b1_commentPayload>
          }
          createMany: {
            args: Prisma.b1_commentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.b1_commentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$b1_commentPayload>[]
          }
          delete: {
            args: Prisma.b1_commentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$b1_commentPayload>
          }
          update: {
            args: Prisma.b1_commentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$b1_commentPayload>
          }
          deleteMany: {
            args: Prisma.b1_commentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.b1_commentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.b1_commentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$b1_commentPayload>[]
          }
          upsert: {
            args: Prisma.b1_commentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$b1_commentPayload>
          }
          aggregate: {
            args: Prisma.B1_commentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateB1_comment>
          }
          groupBy: {
            args: Prisma.b1_commentGroupByArgs<ExtArgs>
            result: $Utils.Optional<B1_commentGroupByOutputType>[]
          }
          count: {
            args: Prisma.b1_commentCountArgs<ExtArgs>
            result: $Utils.Optional<B1_commentCountAggregateOutputType> | number
          }
        }
      }
      stc_category: {
        payload: Prisma.$stc_categoryPayload<ExtArgs>
        fields: Prisma.stc_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stc_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stc_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_categoryPayload>
          }
          findFirst: {
            args: Prisma.stc_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stc_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_categoryPayload>
          }
          findMany: {
            args: Prisma.stc_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_categoryPayload>[]
          }
          create: {
            args: Prisma.stc_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_categoryPayload>
          }
          createMany: {
            args: Prisma.stc_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stc_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_categoryPayload>[]
          }
          delete: {
            args: Prisma.stc_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_categoryPayload>
          }
          update: {
            args: Prisma.stc_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_categoryPayload>
          }
          deleteMany: {
            args: Prisma.stc_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stc_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stc_categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_categoryPayload>[]
          }
          upsert: {
            args: Prisma.stc_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_categoryPayload>
          }
          aggregate: {
            args: Prisma.Stc_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStc_category>
          }
          groupBy: {
            args: Prisma.stc_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stc_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.stc_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Stc_categoryCountAggregateOutputType> | number
          }
        }
      }
      stc_priority: {
        payload: Prisma.$stc_priorityPayload<ExtArgs>
        fields: Prisma.stc_priorityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stc_priorityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_priorityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stc_priorityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_priorityPayload>
          }
          findFirst: {
            args: Prisma.stc_priorityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_priorityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stc_priorityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_priorityPayload>
          }
          findMany: {
            args: Prisma.stc_priorityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_priorityPayload>[]
          }
          create: {
            args: Prisma.stc_priorityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_priorityPayload>
          }
          createMany: {
            args: Prisma.stc_priorityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stc_priorityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_priorityPayload>[]
          }
          delete: {
            args: Prisma.stc_priorityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_priorityPayload>
          }
          update: {
            args: Prisma.stc_priorityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_priorityPayload>
          }
          deleteMany: {
            args: Prisma.stc_priorityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stc_priorityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stc_priorityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_priorityPayload>[]
          }
          upsert: {
            args: Prisma.stc_priorityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_priorityPayload>
          }
          aggregate: {
            args: Prisma.Stc_priorityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStc_priority>
          }
          groupBy: {
            args: Prisma.stc_priorityGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stc_priorityGroupByOutputType>[]
          }
          count: {
            args: Prisma.stc_priorityCountArgs<ExtArgs>
            result: $Utils.Optional<Stc_priorityCountAggregateOutputType> | number
          }
        }
      }
      stc_status: {
        payload: Prisma.$stc_statusPayload<ExtArgs>
        fields: Prisma.stc_statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stc_statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stc_statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_statusPayload>
          }
          findFirst: {
            args: Prisma.stc_statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stc_statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_statusPayload>
          }
          findMany: {
            args: Prisma.stc_statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_statusPayload>[]
          }
          create: {
            args: Prisma.stc_statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_statusPayload>
          }
          createMany: {
            args: Prisma.stc_statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stc_statusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_statusPayload>[]
          }
          delete: {
            args: Prisma.stc_statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_statusPayload>
          }
          update: {
            args: Prisma.stc_statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_statusPayload>
          }
          deleteMany: {
            args: Prisma.stc_statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stc_statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stc_statusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_statusPayload>[]
          }
          upsert: {
            args: Prisma.stc_statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stc_statusPayload>
          }
          aggregate: {
            args: Prisma.Stc_statusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStc_status>
          }
          groupBy: {
            args: Prisma.stc_statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stc_statusGroupByOutputType>[]
          }
          count: {
            args: Prisma.stc_statusCountArgs<ExtArgs>
            result: $Utils.Optional<Stc_statusCountAggregateOutputType> | number
          }
        }
      }
      z_task_history: {
        payload: Prisma.$z_task_historyPayload<ExtArgs>
        fields: Prisma.z_task_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.z_task_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$z_task_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.z_task_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$z_task_historyPayload>
          }
          findFirst: {
            args: Prisma.z_task_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$z_task_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.z_task_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$z_task_historyPayload>
          }
          findMany: {
            args: Prisma.z_task_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$z_task_historyPayload>[]
          }
          create: {
            args: Prisma.z_task_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$z_task_historyPayload>
          }
          createMany: {
            args: Prisma.z_task_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.z_task_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$z_task_historyPayload>[]
          }
          delete: {
            args: Prisma.z_task_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$z_task_historyPayload>
          }
          update: {
            args: Prisma.z_task_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$z_task_historyPayload>
          }
          deleteMany: {
            args: Prisma.z_task_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.z_task_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.z_task_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$z_task_historyPayload>[]
          }
          upsert: {
            args: Prisma.z_task_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$z_task_historyPayload>
          }
          aggregate: {
            args: Prisma.Z_task_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZ_task_history>
          }
          groupBy: {
            args: Prisma.z_task_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Z_task_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.z_task_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Z_task_historyCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    a0_task?: a0_taskOmit
    b1_comment?: b1_commentOmit
    stc_category?: stc_categoryOmit
    stc_priority?: stc_priorityOmit
    stc_status?: stc_statusOmit
    z_task_history?: z_task_historyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type A0_taskCountOutputType
   */

  export type A0_taskCountOutputType = {
    b1_comment: number
    z_task_history: number
  }

  export type A0_taskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    b1_comment?: boolean | A0_taskCountOutputTypeCountB1_commentArgs
    z_task_history?: boolean | A0_taskCountOutputTypeCountZ_task_historyArgs
  }

  // Custom InputTypes
  /**
   * A0_taskCountOutputType without action
   */
  export type A0_taskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the A0_taskCountOutputType
     */
    select?: A0_taskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * A0_taskCountOutputType without action
   */
  export type A0_taskCountOutputTypeCountB1_commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: b1_commentWhereInput
  }

  /**
   * A0_taskCountOutputType without action
   */
  export type A0_taskCountOutputTypeCountZ_task_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: z_task_historyWhereInput
  }


  /**
   * Count Type Stc_categoryCountOutputType
   */

  export type Stc_categoryCountOutputType = {
    a0_task: number
  }

  export type Stc_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    a0_task?: boolean | Stc_categoryCountOutputTypeCountA0_taskArgs
  }

  // Custom InputTypes
  /**
   * Stc_categoryCountOutputType without action
   */
  export type Stc_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stc_categoryCountOutputType
     */
    select?: Stc_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Stc_categoryCountOutputType without action
   */
  export type Stc_categoryCountOutputTypeCountA0_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: a0_taskWhereInput
  }


  /**
   * Count Type Stc_priorityCountOutputType
   */

  export type Stc_priorityCountOutputType = {
    a0_task: number
  }

  export type Stc_priorityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    a0_task?: boolean | Stc_priorityCountOutputTypeCountA0_taskArgs
  }

  // Custom InputTypes
  /**
   * Stc_priorityCountOutputType without action
   */
  export type Stc_priorityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stc_priorityCountOutputType
     */
    select?: Stc_priorityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Stc_priorityCountOutputType without action
   */
  export type Stc_priorityCountOutputTypeCountA0_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: a0_taskWhereInput
  }


  /**
   * Count Type Stc_statusCountOutputType
   */

  export type Stc_statusCountOutputType = {
    a0_task: number
  }

  export type Stc_statusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    a0_task?: boolean | Stc_statusCountOutputTypeCountA0_taskArgs
  }

  // Custom InputTypes
  /**
   * Stc_statusCountOutputType without action
   */
  export type Stc_statusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stc_statusCountOutputType
     */
    select?: Stc_statusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Stc_statusCountOutputType without action
   */
  export type Stc_statusCountOutputTypeCountA0_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: a0_taskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model a0_task
   */

  export type AggregateA0_task = {
    _count: A0_taskCountAggregateOutputType | null
    _avg: A0_taskAvgAggregateOutputType | null
    _sum: A0_taskSumAggregateOutputType | null
    _min: A0_taskMinAggregateOutputType | null
    _max: A0_taskMaxAggregateOutputType | null
  }

  export type A0_taskAvgAggregateOutputType = {
    task_id: number | null
  }

  export type A0_taskSumAggregateOutputType = {
    task_id: bigint | null
  }

  export type A0_taskMinAggregateOutputType = {
    task_id: bigint | null
    task_title: string | null
    task_description: string | null
    task_date: Date | null
    task_status: string | null
    task_priority: string | null
    task_category: string | null
    created_date: Date | null
    updated_date: Date | null
  }

  export type A0_taskMaxAggregateOutputType = {
    task_id: bigint | null
    task_title: string | null
    task_description: string | null
    task_date: Date | null
    task_status: string | null
    task_priority: string | null
    task_category: string | null
    created_date: Date | null
    updated_date: Date | null
  }

  export type A0_taskCountAggregateOutputType = {
    task_id: number
    task_title: number
    task_description: number
    task_date: number
    task_status: number
    task_priority: number
    task_category: number
    created_date: number
    updated_date: number
    _all: number
  }


  export type A0_taskAvgAggregateInputType = {
    task_id?: true
  }

  export type A0_taskSumAggregateInputType = {
    task_id?: true
  }

  export type A0_taskMinAggregateInputType = {
    task_id?: true
    task_title?: true
    task_description?: true
    task_date?: true
    task_status?: true
    task_priority?: true
    task_category?: true
    created_date?: true
    updated_date?: true
  }

  export type A0_taskMaxAggregateInputType = {
    task_id?: true
    task_title?: true
    task_description?: true
    task_date?: true
    task_status?: true
    task_priority?: true
    task_category?: true
    created_date?: true
    updated_date?: true
  }

  export type A0_taskCountAggregateInputType = {
    task_id?: true
    task_title?: true
    task_description?: true
    task_date?: true
    task_status?: true
    task_priority?: true
    task_category?: true
    created_date?: true
    updated_date?: true
    _all?: true
  }

  export type A0_taskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which a0_task to aggregate.
     */
    where?: a0_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of a0_tasks to fetch.
     */
    orderBy?: a0_taskOrderByWithRelationInput | a0_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: a0_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` a0_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` a0_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned a0_tasks
    **/
    _count?: true | A0_taskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: A0_taskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: A0_taskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: A0_taskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: A0_taskMaxAggregateInputType
  }

  export type GetA0_taskAggregateType<T extends A0_taskAggregateArgs> = {
        [P in keyof T & keyof AggregateA0_task]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateA0_task[P]>
      : GetScalarType<T[P], AggregateA0_task[P]>
  }




  export type a0_taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: a0_taskWhereInput
    orderBy?: a0_taskOrderByWithAggregationInput | a0_taskOrderByWithAggregationInput[]
    by: A0_taskScalarFieldEnum[] | A0_taskScalarFieldEnum
    having?: a0_taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: A0_taskCountAggregateInputType | true
    _avg?: A0_taskAvgAggregateInputType
    _sum?: A0_taskSumAggregateInputType
    _min?: A0_taskMinAggregateInputType
    _max?: A0_taskMaxAggregateInputType
  }

  export type A0_taskGroupByOutputType = {
    task_id: bigint
    task_title: string
    task_description: string
    task_date: Date | null
    task_status: string
    task_priority: string
    task_category: string
    created_date: Date
    updated_date: Date | null
    _count: A0_taskCountAggregateOutputType | null
    _avg: A0_taskAvgAggregateOutputType | null
    _sum: A0_taskSumAggregateOutputType | null
    _min: A0_taskMinAggregateOutputType | null
    _max: A0_taskMaxAggregateOutputType | null
  }

  type GetA0_taskGroupByPayload<T extends a0_taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<A0_taskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof A0_taskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], A0_taskGroupByOutputType[P]>
            : GetScalarType<T[P], A0_taskGroupByOutputType[P]>
        }
      >
    >


  export type a0_taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_id?: boolean
    task_title?: boolean
    task_description?: boolean
    task_date?: boolean
    task_status?: boolean
    task_priority?: boolean
    task_category?: boolean
    created_date?: boolean
    updated_date?: boolean
    stc_category?: boolean | stc_categoryDefaultArgs<ExtArgs>
    stc_priority?: boolean | stc_priorityDefaultArgs<ExtArgs>
    stc_status?: boolean | stc_statusDefaultArgs<ExtArgs>
    b1_comment?: boolean | a0_task$b1_commentArgs<ExtArgs>
    z_task_history?: boolean | a0_task$z_task_historyArgs<ExtArgs>
    _count?: boolean | A0_taskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["a0_task"]>

  export type a0_taskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_id?: boolean
    task_title?: boolean
    task_description?: boolean
    task_date?: boolean
    task_status?: boolean
    task_priority?: boolean
    task_category?: boolean
    created_date?: boolean
    updated_date?: boolean
    stc_category?: boolean | stc_categoryDefaultArgs<ExtArgs>
    stc_priority?: boolean | stc_priorityDefaultArgs<ExtArgs>
    stc_status?: boolean | stc_statusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["a0_task"]>

  export type a0_taskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_id?: boolean
    task_title?: boolean
    task_description?: boolean
    task_date?: boolean
    task_status?: boolean
    task_priority?: boolean
    task_category?: boolean
    created_date?: boolean
    updated_date?: boolean
    stc_category?: boolean | stc_categoryDefaultArgs<ExtArgs>
    stc_priority?: boolean | stc_priorityDefaultArgs<ExtArgs>
    stc_status?: boolean | stc_statusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["a0_task"]>

  export type a0_taskSelectScalar = {
    task_id?: boolean
    task_title?: boolean
    task_description?: boolean
    task_date?: boolean
    task_status?: boolean
    task_priority?: boolean
    task_category?: boolean
    created_date?: boolean
    updated_date?: boolean
  }

  export type a0_taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"task_id" | "task_title" | "task_description" | "task_date" | "task_status" | "task_priority" | "task_category" | "created_date" | "updated_date", ExtArgs["result"]["a0_task"]>
  export type a0_taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stc_category?: boolean | stc_categoryDefaultArgs<ExtArgs>
    stc_priority?: boolean | stc_priorityDefaultArgs<ExtArgs>
    stc_status?: boolean | stc_statusDefaultArgs<ExtArgs>
    b1_comment?: boolean | a0_task$b1_commentArgs<ExtArgs>
    z_task_history?: boolean | a0_task$z_task_historyArgs<ExtArgs>
    _count?: boolean | A0_taskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type a0_taskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stc_category?: boolean | stc_categoryDefaultArgs<ExtArgs>
    stc_priority?: boolean | stc_priorityDefaultArgs<ExtArgs>
    stc_status?: boolean | stc_statusDefaultArgs<ExtArgs>
  }
  export type a0_taskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stc_category?: boolean | stc_categoryDefaultArgs<ExtArgs>
    stc_priority?: boolean | stc_priorityDefaultArgs<ExtArgs>
    stc_status?: boolean | stc_statusDefaultArgs<ExtArgs>
  }

  export type $a0_taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "a0_task"
    objects: {
      stc_category: Prisma.$stc_categoryPayload<ExtArgs>
      stc_priority: Prisma.$stc_priorityPayload<ExtArgs>
      stc_status: Prisma.$stc_statusPayload<ExtArgs>
      b1_comment: Prisma.$b1_commentPayload<ExtArgs>[]
      z_task_history: Prisma.$z_task_historyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      task_id: bigint
      task_title: string
      task_description: string
      task_date: Date | null
      task_status: string
      task_priority: string
      task_category: string
      created_date: Date
      updated_date: Date | null
    }, ExtArgs["result"]["a0_task"]>
    composites: {}
  }

  type a0_taskGetPayload<S extends boolean | null | undefined | a0_taskDefaultArgs> = $Result.GetResult<Prisma.$a0_taskPayload, S>

  type a0_taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<a0_taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: A0_taskCountAggregateInputType | true
    }

  export interface a0_taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['a0_task'], meta: { name: 'a0_task' } }
    /**
     * Find zero or one A0_task that matches the filter.
     * @param {a0_taskFindUniqueArgs} args - Arguments to find a A0_task
     * @example
     * // Get one A0_task
     * const a0_task = await prisma.a0_task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends a0_taskFindUniqueArgs>(args: SelectSubset<T, a0_taskFindUniqueArgs<ExtArgs>>): Prisma__a0_taskClient<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one A0_task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {a0_taskFindUniqueOrThrowArgs} args - Arguments to find a A0_task
     * @example
     * // Get one A0_task
     * const a0_task = await prisma.a0_task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends a0_taskFindUniqueOrThrowArgs>(args: SelectSubset<T, a0_taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__a0_taskClient<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first A0_task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {a0_taskFindFirstArgs} args - Arguments to find a A0_task
     * @example
     * // Get one A0_task
     * const a0_task = await prisma.a0_task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends a0_taskFindFirstArgs>(args?: SelectSubset<T, a0_taskFindFirstArgs<ExtArgs>>): Prisma__a0_taskClient<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first A0_task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {a0_taskFindFirstOrThrowArgs} args - Arguments to find a A0_task
     * @example
     * // Get one A0_task
     * const a0_task = await prisma.a0_task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends a0_taskFindFirstOrThrowArgs>(args?: SelectSubset<T, a0_taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__a0_taskClient<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more A0_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {a0_taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all A0_tasks
     * const a0_tasks = await prisma.a0_task.findMany()
     * 
     * // Get first 10 A0_tasks
     * const a0_tasks = await prisma.a0_task.findMany({ take: 10 })
     * 
     * // Only select the `task_id`
     * const a0_taskWithTask_idOnly = await prisma.a0_task.findMany({ select: { task_id: true } })
     * 
     */
    findMany<T extends a0_taskFindManyArgs>(args?: SelectSubset<T, a0_taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a A0_task.
     * @param {a0_taskCreateArgs} args - Arguments to create a A0_task.
     * @example
     * // Create one A0_task
     * const A0_task = await prisma.a0_task.create({
     *   data: {
     *     // ... data to create a A0_task
     *   }
     * })
     * 
     */
    create<T extends a0_taskCreateArgs>(args: SelectSubset<T, a0_taskCreateArgs<ExtArgs>>): Prisma__a0_taskClient<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many A0_tasks.
     * @param {a0_taskCreateManyArgs} args - Arguments to create many A0_tasks.
     * @example
     * // Create many A0_tasks
     * const a0_task = await prisma.a0_task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends a0_taskCreateManyArgs>(args?: SelectSubset<T, a0_taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many A0_tasks and returns the data saved in the database.
     * @param {a0_taskCreateManyAndReturnArgs} args - Arguments to create many A0_tasks.
     * @example
     * // Create many A0_tasks
     * const a0_task = await prisma.a0_task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many A0_tasks and only return the `task_id`
     * const a0_taskWithTask_idOnly = await prisma.a0_task.createManyAndReturn({
     *   select: { task_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends a0_taskCreateManyAndReturnArgs>(args?: SelectSubset<T, a0_taskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a A0_task.
     * @param {a0_taskDeleteArgs} args - Arguments to delete one A0_task.
     * @example
     * // Delete one A0_task
     * const A0_task = await prisma.a0_task.delete({
     *   where: {
     *     // ... filter to delete one A0_task
     *   }
     * })
     * 
     */
    delete<T extends a0_taskDeleteArgs>(args: SelectSubset<T, a0_taskDeleteArgs<ExtArgs>>): Prisma__a0_taskClient<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one A0_task.
     * @param {a0_taskUpdateArgs} args - Arguments to update one A0_task.
     * @example
     * // Update one A0_task
     * const a0_task = await prisma.a0_task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends a0_taskUpdateArgs>(args: SelectSubset<T, a0_taskUpdateArgs<ExtArgs>>): Prisma__a0_taskClient<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more A0_tasks.
     * @param {a0_taskDeleteManyArgs} args - Arguments to filter A0_tasks to delete.
     * @example
     * // Delete a few A0_tasks
     * const { count } = await prisma.a0_task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends a0_taskDeleteManyArgs>(args?: SelectSubset<T, a0_taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more A0_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {a0_taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many A0_tasks
     * const a0_task = await prisma.a0_task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends a0_taskUpdateManyArgs>(args: SelectSubset<T, a0_taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more A0_tasks and returns the data updated in the database.
     * @param {a0_taskUpdateManyAndReturnArgs} args - Arguments to update many A0_tasks.
     * @example
     * // Update many A0_tasks
     * const a0_task = await prisma.a0_task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more A0_tasks and only return the `task_id`
     * const a0_taskWithTask_idOnly = await prisma.a0_task.updateManyAndReturn({
     *   select: { task_id: true },
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
    updateManyAndReturn<T extends a0_taskUpdateManyAndReturnArgs>(args: SelectSubset<T, a0_taskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one A0_task.
     * @param {a0_taskUpsertArgs} args - Arguments to update or create a A0_task.
     * @example
     * // Update or create a A0_task
     * const a0_task = await prisma.a0_task.upsert({
     *   create: {
     *     // ... data to create a A0_task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the A0_task we want to update
     *   }
     * })
     */
    upsert<T extends a0_taskUpsertArgs>(args: SelectSubset<T, a0_taskUpsertArgs<ExtArgs>>): Prisma__a0_taskClient<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of A0_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {a0_taskCountArgs} args - Arguments to filter A0_tasks to count.
     * @example
     * // Count the number of A0_tasks
     * const count = await prisma.a0_task.count({
     *   where: {
     *     // ... the filter for the A0_tasks we want to count
     *   }
     * })
    **/
    count<T extends a0_taskCountArgs>(
      args?: Subset<T, a0_taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], A0_taskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a A0_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {A0_taskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends A0_taskAggregateArgs>(args: Subset<T, A0_taskAggregateArgs>): Prisma.PrismaPromise<GetA0_taskAggregateType<T>>

    /**
     * Group by A0_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {a0_taskGroupByArgs} args - Group by arguments.
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
      T extends a0_taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: a0_taskGroupByArgs['orderBy'] }
        : { orderBy?: a0_taskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, a0_taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetA0_taskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the a0_task model
   */
  readonly fields: a0_taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for a0_task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__a0_taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stc_category<T extends stc_categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stc_categoryDefaultArgs<ExtArgs>>): Prisma__stc_categoryClient<$Result.GetResult<Prisma.$stc_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stc_priority<T extends stc_priorityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stc_priorityDefaultArgs<ExtArgs>>): Prisma__stc_priorityClient<$Result.GetResult<Prisma.$stc_priorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stc_status<T extends stc_statusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stc_statusDefaultArgs<ExtArgs>>): Prisma__stc_statusClient<$Result.GetResult<Prisma.$stc_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    b1_comment<T extends a0_task$b1_commentArgs<ExtArgs> = {}>(args?: Subset<T, a0_task$b1_commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$b1_commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    z_task_history<T extends a0_task$z_task_historyArgs<ExtArgs> = {}>(args?: Subset<T, a0_task$z_task_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$z_task_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the a0_task model
   */
  interface a0_taskFieldRefs {
    readonly task_id: FieldRef<"a0_task", 'BigInt'>
    readonly task_title: FieldRef<"a0_task", 'String'>
    readonly task_description: FieldRef<"a0_task", 'String'>
    readonly task_date: FieldRef<"a0_task", 'DateTime'>
    readonly task_status: FieldRef<"a0_task", 'String'>
    readonly task_priority: FieldRef<"a0_task", 'String'>
    readonly task_category: FieldRef<"a0_task", 'String'>
    readonly created_date: FieldRef<"a0_task", 'DateTime'>
    readonly updated_date: FieldRef<"a0_task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * a0_task findUnique
   */
  export type a0_taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
    /**
     * Filter, which a0_task to fetch.
     */
    where: a0_taskWhereUniqueInput
  }

  /**
   * a0_task findUniqueOrThrow
   */
  export type a0_taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
    /**
     * Filter, which a0_task to fetch.
     */
    where: a0_taskWhereUniqueInput
  }

  /**
   * a0_task findFirst
   */
  export type a0_taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
    /**
     * Filter, which a0_task to fetch.
     */
    where?: a0_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of a0_tasks to fetch.
     */
    orderBy?: a0_taskOrderByWithRelationInput | a0_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for a0_tasks.
     */
    cursor?: a0_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` a0_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` a0_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of a0_tasks.
     */
    distinct?: A0_taskScalarFieldEnum | A0_taskScalarFieldEnum[]
  }

  /**
   * a0_task findFirstOrThrow
   */
  export type a0_taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
    /**
     * Filter, which a0_task to fetch.
     */
    where?: a0_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of a0_tasks to fetch.
     */
    orderBy?: a0_taskOrderByWithRelationInput | a0_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for a0_tasks.
     */
    cursor?: a0_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` a0_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` a0_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of a0_tasks.
     */
    distinct?: A0_taskScalarFieldEnum | A0_taskScalarFieldEnum[]
  }

  /**
   * a0_task findMany
   */
  export type a0_taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
    /**
     * Filter, which a0_tasks to fetch.
     */
    where?: a0_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of a0_tasks to fetch.
     */
    orderBy?: a0_taskOrderByWithRelationInput | a0_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing a0_tasks.
     */
    cursor?: a0_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` a0_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` a0_tasks.
     */
    skip?: number
    distinct?: A0_taskScalarFieldEnum | A0_taskScalarFieldEnum[]
  }

  /**
   * a0_task create
   */
  export type a0_taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
    /**
     * The data needed to create a a0_task.
     */
    data: XOR<a0_taskCreateInput, a0_taskUncheckedCreateInput>
  }

  /**
   * a0_task createMany
   */
  export type a0_taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many a0_tasks.
     */
    data: a0_taskCreateManyInput | a0_taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * a0_task createManyAndReturn
   */
  export type a0_taskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * The data used to create many a0_tasks.
     */
    data: a0_taskCreateManyInput | a0_taskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * a0_task update
   */
  export type a0_taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
    /**
     * The data needed to update a a0_task.
     */
    data: XOR<a0_taskUpdateInput, a0_taskUncheckedUpdateInput>
    /**
     * Choose, which a0_task to update.
     */
    where: a0_taskWhereUniqueInput
  }

  /**
   * a0_task updateMany
   */
  export type a0_taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update a0_tasks.
     */
    data: XOR<a0_taskUpdateManyMutationInput, a0_taskUncheckedUpdateManyInput>
    /**
     * Filter which a0_tasks to update
     */
    where?: a0_taskWhereInput
    /**
     * Limit how many a0_tasks to update.
     */
    limit?: number
  }

  /**
   * a0_task updateManyAndReturn
   */
  export type a0_taskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * The data used to update a0_tasks.
     */
    data: XOR<a0_taskUpdateManyMutationInput, a0_taskUncheckedUpdateManyInput>
    /**
     * Filter which a0_tasks to update
     */
    where?: a0_taskWhereInput
    /**
     * Limit how many a0_tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * a0_task upsert
   */
  export type a0_taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
    /**
     * The filter to search for the a0_task to update in case it exists.
     */
    where: a0_taskWhereUniqueInput
    /**
     * In case the a0_task found by the `where` argument doesn't exist, create a new a0_task with this data.
     */
    create: XOR<a0_taskCreateInput, a0_taskUncheckedCreateInput>
    /**
     * In case the a0_task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<a0_taskUpdateInput, a0_taskUncheckedUpdateInput>
  }

  /**
   * a0_task delete
   */
  export type a0_taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
    /**
     * Filter which a0_task to delete.
     */
    where: a0_taskWhereUniqueInput
  }

  /**
   * a0_task deleteMany
   */
  export type a0_taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which a0_tasks to delete
     */
    where?: a0_taskWhereInput
    /**
     * Limit how many a0_tasks to delete.
     */
    limit?: number
  }

  /**
   * a0_task.b1_comment
   */
  export type a0_task$b1_commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentInclude<ExtArgs> | null
    where?: b1_commentWhereInput
    orderBy?: b1_commentOrderByWithRelationInput | b1_commentOrderByWithRelationInput[]
    cursor?: b1_commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: B1_commentScalarFieldEnum | B1_commentScalarFieldEnum[]
  }

  /**
   * a0_task.z_task_history
   */
  export type a0_task$z_task_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyInclude<ExtArgs> | null
    where?: z_task_historyWhereInput
    orderBy?: z_task_historyOrderByWithRelationInput | z_task_historyOrderByWithRelationInput[]
    cursor?: z_task_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Z_task_historyScalarFieldEnum | Z_task_historyScalarFieldEnum[]
  }

  /**
   * a0_task without action
   */
  export type a0_taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
  }


  /**
   * Model b1_comment
   */

  export type AggregateB1_comment = {
    _count: B1_commentCountAggregateOutputType | null
    _avg: B1_commentAvgAggregateOutputType | null
    _sum: B1_commentSumAggregateOutputType | null
    _min: B1_commentMinAggregateOutputType | null
    _max: B1_commentMaxAggregateOutputType | null
  }

  export type B1_commentAvgAggregateOutputType = {
    comment_id: number | null
    task_id: number | null
  }

  export type B1_commentSumAggregateOutputType = {
    comment_id: bigint | null
    task_id: bigint | null
  }

  export type B1_commentMinAggregateOutputType = {
    comment_id: bigint | null
    task_id: bigint | null
    comment_text: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type B1_commentMaxAggregateOutputType = {
    comment_id: bigint | null
    task_id: bigint | null
    comment_text: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type B1_commentCountAggregateOutputType = {
    comment_id: number
    task_id: number
    comment_text: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type B1_commentAvgAggregateInputType = {
    comment_id?: true
    task_id?: true
  }

  export type B1_commentSumAggregateInputType = {
    comment_id?: true
    task_id?: true
  }

  export type B1_commentMinAggregateInputType = {
    comment_id?: true
    task_id?: true
    comment_text?: true
    created_at?: true
    updated_at?: true
  }

  export type B1_commentMaxAggregateInputType = {
    comment_id?: true
    task_id?: true
    comment_text?: true
    created_at?: true
    updated_at?: true
  }

  export type B1_commentCountAggregateInputType = {
    comment_id?: true
    task_id?: true
    comment_text?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type B1_commentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which b1_comment to aggregate.
     */
    where?: b1_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of b1_comments to fetch.
     */
    orderBy?: b1_commentOrderByWithRelationInput | b1_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: b1_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` b1_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` b1_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned b1_comments
    **/
    _count?: true | B1_commentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: B1_commentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: B1_commentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: B1_commentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: B1_commentMaxAggregateInputType
  }

  export type GetB1_commentAggregateType<T extends B1_commentAggregateArgs> = {
        [P in keyof T & keyof AggregateB1_comment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateB1_comment[P]>
      : GetScalarType<T[P], AggregateB1_comment[P]>
  }




  export type b1_commentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: b1_commentWhereInput
    orderBy?: b1_commentOrderByWithAggregationInput | b1_commentOrderByWithAggregationInput[]
    by: B1_commentScalarFieldEnum[] | B1_commentScalarFieldEnum
    having?: b1_commentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: B1_commentCountAggregateInputType | true
    _avg?: B1_commentAvgAggregateInputType
    _sum?: B1_commentSumAggregateInputType
    _min?: B1_commentMinAggregateInputType
    _max?: B1_commentMaxAggregateInputType
  }

  export type B1_commentGroupByOutputType = {
    comment_id: bigint
    task_id: bigint
    comment_text: string
    created_at: Date
    updated_at: Date | null
    _count: B1_commentCountAggregateOutputType | null
    _avg: B1_commentAvgAggregateOutputType | null
    _sum: B1_commentSumAggregateOutputType | null
    _min: B1_commentMinAggregateOutputType | null
    _max: B1_commentMaxAggregateOutputType | null
  }

  type GetB1_commentGroupByPayload<T extends b1_commentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<B1_commentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof B1_commentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], B1_commentGroupByOutputType[P]>
            : GetScalarType<T[P], B1_commentGroupByOutputType[P]>
        }
      >
    >


  export type b1_commentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    task_id?: boolean
    comment_text?: boolean
    created_at?: boolean
    updated_at?: boolean
    a0_task?: boolean | a0_taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["b1_comment"]>

  export type b1_commentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    task_id?: boolean
    comment_text?: boolean
    created_at?: boolean
    updated_at?: boolean
    a0_task?: boolean | a0_taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["b1_comment"]>

  export type b1_commentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    task_id?: boolean
    comment_text?: boolean
    created_at?: boolean
    updated_at?: boolean
    a0_task?: boolean | a0_taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["b1_comment"]>

  export type b1_commentSelectScalar = {
    comment_id?: boolean
    task_id?: boolean
    comment_text?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type b1_commentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_id" | "task_id" | "comment_text" | "created_at" | "updated_at", ExtArgs["result"]["b1_comment"]>
  export type b1_commentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    a0_task?: boolean | a0_taskDefaultArgs<ExtArgs>
  }
  export type b1_commentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    a0_task?: boolean | a0_taskDefaultArgs<ExtArgs>
  }
  export type b1_commentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    a0_task?: boolean | a0_taskDefaultArgs<ExtArgs>
  }

  export type $b1_commentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "b1_comment"
    objects: {
      a0_task: Prisma.$a0_taskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      comment_id: bigint
      task_id: bigint
      comment_text: string
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["b1_comment"]>
    composites: {}
  }

  type b1_commentGetPayload<S extends boolean | null | undefined | b1_commentDefaultArgs> = $Result.GetResult<Prisma.$b1_commentPayload, S>

  type b1_commentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<b1_commentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: B1_commentCountAggregateInputType | true
    }

  export interface b1_commentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['b1_comment'], meta: { name: 'b1_comment' } }
    /**
     * Find zero or one B1_comment that matches the filter.
     * @param {b1_commentFindUniqueArgs} args - Arguments to find a B1_comment
     * @example
     * // Get one B1_comment
     * const b1_comment = await prisma.b1_comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends b1_commentFindUniqueArgs>(args: SelectSubset<T, b1_commentFindUniqueArgs<ExtArgs>>): Prisma__b1_commentClient<$Result.GetResult<Prisma.$b1_commentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one B1_comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {b1_commentFindUniqueOrThrowArgs} args - Arguments to find a B1_comment
     * @example
     * // Get one B1_comment
     * const b1_comment = await prisma.b1_comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends b1_commentFindUniqueOrThrowArgs>(args: SelectSubset<T, b1_commentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__b1_commentClient<$Result.GetResult<Prisma.$b1_commentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first B1_comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {b1_commentFindFirstArgs} args - Arguments to find a B1_comment
     * @example
     * // Get one B1_comment
     * const b1_comment = await prisma.b1_comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends b1_commentFindFirstArgs>(args?: SelectSubset<T, b1_commentFindFirstArgs<ExtArgs>>): Prisma__b1_commentClient<$Result.GetResult<Prisma.$b1_commentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first B1_comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {b1_commentFindFirstOrThrowArgs} args - Arguments to find a B1_comment
     * @example
     * // Get one B1_comment
     * const b1_comment = await prisma.b1_comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends b1_commentFindFirstOrThrowArgs>(args?: SelectSubset<T, b1_commentFindFirstOrThrowArgs<ExtArgs>>): Prisma__b1_commentClient<$Result.GetResult<Prisma.$b1_commentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more B1_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {b1_commentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all B1_comments
     * const b1_comments = await prisma.b1_comment.findMany()
     * 
     * // Get first 10 B1_comments
     * const b1_comments = await prisma.b1_comment.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const b1_commentWithComment_idOnly = await prisma.b1_comment.findMany({ select: { comment_id: true } })
     * 
     */
    findMany<T extends b1_commentFindManyArgs>(args?: SelectSubset<T, b1_commentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$b1_commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a B1_comment.
     * @param {b1_commentCreateArgs} args - Arguments to create a B1_comment.
     * @example
     * // Create one B1_comment
     * const B1_comment = await prisma.b1_comment.create({
     *   data: {
     *     // ... data to create a B1_comment
     *   }
     * })
     * 
     */
    create<T extends b1_commentCreateArgs>(args: SelectSubset<T, b1_commentCreateArgs<ExtArgs>>): Prisma__b1_commentClient<$Result.GetResult<Prisma.$b1_commentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many B1_comments.
     * @param {b1_commentCreateManyArgs} args - Arguments to create many B1_comments.
     * @example
     * // Create many B1_comments
     * const b1_comment = await prisma.b1_comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends b1_commentCreateManyArgs>(args?: SelectSubset<T, b1_commentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many B1_comments and returns the data saved in the database.
     * @param {b1_commentCreateManyAndReturnArgs} args - Arguments to create many B1_comments.
     * @example
     * // Create many B1_comments
     * const b1_comment = await prisma.b1_comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many B1_comments and only return the `comment_id`
     * const b1_commentWithComment_idOnly = await prisma.b1_comment.createManyAndReturn({
     *   select: { comment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends b1_commentCreateManyAndReturnArgs>(args?: SelectSubset<T, b1_commentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$b1_commentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a B1_comment.
     * @param {b1_commentDeleteArgs} args - Arguments to delete one B1_comment.
     * @example
     * // Delete one B1_comment
     * const B1_comment = await prisma.b1_comment.delete({
     *   where: {
     *     // ... filter to delete one B1_comment
     *   }
     * })
     * 
     */
    delete<T extends b1_commentDeleteArgs>(args: SelectSubset<T, b1_commentDeleteArgs<ExtArgs>>): Prisma__b1_commentClient<$Result.GetResult<Prisma.$b1_commentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one B1_comment.
     * @param {b1_commentUpdateArgs} args - Arguments to update one B1_comment.
     * @example
     * // Update one B1_comment
     * const b1_comment = await prisma.b1_comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends b1_commentUpdateArgs>(args: SelectSubset<T, b1_commentUpdateArgs<ExtArgs>>): Prisma__b1_commentClient<$Result.GetResult<Prisma.$b1_commentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more B1_comments.
     * @param {b1_commentDeleteManyArgs} args - Arguments to filter B1_comments to delete.
     * @example
     * // Delete a few B1_comments
     * const { count } = await prisma.b1_comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends b1_commentDeleteManyArgs>(args?: SelectSubset<T, b1_commentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more B1_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {b1_commentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many B1_comments
     * const b1_comment = await prisma.b1_comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends b1_commentUpdateManyArgs>(args: SelectSubset<T, b1_commentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more B1_comments and returns the data updated in the database.
     * @param {b1_commentUpdateManyAndReturnArgs} args - Arguments to update many B1_comments.
     * @example
     * // Update many B1_comments
     * const b1_comment = await prisma.b1_comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more B1_comments and only return the `comment_id`
     * const b1_commentWithComment_idOnly = await prisma.b1_comment.updateManyAndReturn({
     *   select: { comment_id: true },
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
    updateManyAndReturn<T extends b1_commentUpdateManyAndReturnArgs>(args: SelectSubset<T, b1_commentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$b1_commentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one B1_comment.
     * @param {b1_commentUpsertArgs} args - Arguments to update or create a B1_comment.
     * @example
     * // Update or create a B1_comment
     * const b1_comment = await prisma.b1_comment.upsert({
     *   create: {
     *     // ... data to create a B1_comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the B1_comment we want to update
     *   }
     * })
     */
    upsert<T extends b1_commentUpsertArgs>(args: SelectSubset<T, b1_commentUpsertArgs<ExtArgs>>): Prisma__b1_commentClient<$Result.GetResult<Prisma.$b1_commentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of B1_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {b1_commentCountArgs} args - Arguments to filter B1_comments to count.
     * @example
     * // Count the number of B1_comments
     * const count = await prisma.b1_comment.count({
     *   where: {
     *     // ... the filter for the B1_comments we want to count
     *   }
     * })
    **/
    count<T extends b1_commentCountArgs>(
      args?: Subset<T, b1_commentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], B1_commentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a B1_comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {B1_commentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends B1_commentAggregateArgs>(args: Subset<T, B1_commentAggregateArgs>): Prisma.PrismaPromise<GetB1_commentAggregateType<T>>

    /**
     * Group by B1_comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {b1_commentGroupByArgs} args - Group by arguments.
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
      T extends b1_commentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: b1_commentGroupByArgs['orderBy'] }
        : { orderBy?: b1_commentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, b1_commentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetB1_commentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the b1_comment model
   */
  readonly fields: b1_commentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for b1_comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__b1_commentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    a0_task<T extends a0_taskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, a0_taskDefaultArgs<ExtArgs>>): Prisma__a0_taskClient<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the b1_comment model
   */
  interface b1_commentFieldRefs {
    readonly comment_id: FieldRef<"b1_comment", 'BigInt'>
    readonly task_id: FieldRef<"b1_comment", 'BigInt'>
    readonly comment_text: FieldRef<"b1_comment", 'String'>
    readonly created_at: FieldRef<"b1_comment", 'DateTime'>
    readonly updated_at: FieldRef<"b1_comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * b1_comment findUnique
   */
  export type b1_commentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentInclude<ExtArgs> | null
    /**
     * Filter, which b1_comment to fetch.
     */
    where: b1_commentWhereUniqueInput
  }

  /**
   * b1_comment findUniqueOrThrow
   */
  export type b1_commentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentInclude<ExtArgs> | null
    /**
     * Filter, which b1_comment to fetch.
     */
    where: b1_commentWhereUniqueInput
  }

  /**
   * b1_comment findFirst
   */
  export type b1_commentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentInclude<ExtArgs> | null
    /**
     * Filter, which b1_comment to fetch.
     */
    where?: b1_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of b1_comments to fetch.
     */
    orderBy?: b1_commentOrderByWithRelationInput | b1_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for b1_comments.
     */
    cursor?: b1_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` b1_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` b1_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of b1_comments.
     */
    distinct?: B1_commentScalarFieldEnum | B1_commentScalarFieldEnum[]
  }

  /**
   * b1_comment findFirstOrThrow
   */
  export type b1_commentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentInclude<ExtArgs> | null
    /**
     * Filter, which b1_comment to fetch.
     */
    where?: b1_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of b1_comments to fetch.
     */
    orderBy?: b1_commentOrderByWithRelationInput | b1_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for b1_comments.
     */
    cursor?: b1_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` b1_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` b1_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of b1_comments.
     */
    distinct?: B1_commentScalarFieldEnum | B1_commentScalarFieldEnum[]
  }

  /**
   * b1_comment findMany
   */
  export type b1_commentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentInclude<ExtArgs> | null
    /**
     * Filter, which b1_comments to fetch.
     */
    where?: b1_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of b1_comments to fetch.
     */
    orderBy?: b1_commentOrderByWithRelationInput | b1_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing b1_comments.
     */
    cursor?: b1_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` b1_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` b1_comments.
     */
    skip?: number
    distinct?: B1_commentScalarFieldEnum | B1_commentScalarFieldEnum[]
  }

  /**
   * b1_comment create
   */
  export type b1_commentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentInclude<ExtArgs> | null
    /**
     * The data needed to create a b1_comment.
     */
    data: XOR<b1_commentCreateInput, b1_commentUncheckedCreateInput>
  }

  /**
   * b1_comment createMany
   */
  export type b1_commentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many b1_comments.
     */
    data: b1_commentCreateManyInput | b1_commentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * b1_comment createManyAndReturn
   */
  export type b1_commentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * The data used to create many b1_comments.
     */
    data: b1_commentCreateManyInput | b1_commentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * b1_comment update
   */
  export type b1_commentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentInclude<ExtArgs> | null
    /**
     * The data needed to update a b1_comment.
     */
    data: XOR<b1_commentUpdateInput, b1_commentUncheckedUpdateInput>
    /**
     * Choose, which b1_comment to update.
     */
    where: b1_commentWhereUniqueInput
  }

  /**
   * b1_comment updateMany
   */
  export type b1_commentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update b1_comments.
     */
    data: XOR<b1_commentUpdateManyMutationInput, b1_commentUncheckedUpdateManyInput>
    /**
     * Filter which b1_comments to update
     */
    where?: b1_commentWhereInput
    /**
     * Limit how many b1_comments to update.
     */
    limit?: number
  }

  /**
   * b1_comment updateManyAndReturn
   */
  export type b1_commentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * The data used to update b1_comments.
     */
    data: XOR<b1_commentUpdateManyMutationInput, b1_commentUncheckedUpdateManyInput>
    /**
     * Filter which b1_comments to update
     */
    where?: b1_commentWhereInput
    /**
     * Limit how many b1_comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * b1_comment upsert
   */
  export type b1_commentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentInclude<ExtArgs> | null
    /**
     * The filter to search for the b1_comment to update in case it exists.
     */
    where: b1_commentWhereUniqueInput
    /**
     * In case the b1_comment found by the `where` argument doesn't exist, create a new b1_comment with this data.
     */
    create: XOR<b1_commentCreateInput, b1_commentUncheckedCreateInput>
    /**
     * In case the b1_comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<b1_commentUpdateInput, b1_commentUncheckedUpdateInput>
  }

  /**
   * b1_comment delete
   */
  export type b1_commentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentInclude<ExtArgs> | null
    /**
     * Filter which b1_comment to delete.
     */
    where: b1_commentWhereUniqueInput
  }

  /**
   * b1_comment deleteMany
   */
  export type b1_commentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which b1_comments to delete
     */
    where?: b1_commentWhereInput
    /**
     * Limit how many b1_comments to delete.
     */
    limit?: number
  }

  /**
   * b1_comment without action
   */
  export type b1_commentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the b1_comment
     */
    select?: b1_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the b1_comment
     */
    omit?: b1_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: b1_commentInclude<ExtArgs> | null
  }


  /**
   * Model stc_category
   */

  export type AggregateStc_category = {
    _count: Stc_categoryCountAggregateOutputType | null
    _min: Stc_categoryMinAggregateOutputType | null
    _max: Stc_categoryMaxAggregateOutputType | null
  }

  export type Stc_categoryMinAggregateOutputType = {
    category_name: string | null
    created_date: Date | null
    updated_date: Date | null
    update_reason: string | null
  }

  export type Stc_categoryMaxAggregateOutputType = {
    category_name: string | null
    created_date: Date | null
    updated_date: Date | null
    update_reason: string | null
  }

  export type Stc_categoryCountAggregateOutputType = {
    category_name: number
    created_date: number
    updated_date: number
    update_reason: number
    _all: number
  }


  export type Stc_categoryMinAggregateInputType = {
    category_name?: true
    created_date?: true
    updated_date?: true
    update_reason?: true
  }

  export type Stc_categoryMaxAggregateInputType = {
    category_name?: true
    created_date?: true
    updated_date?: true
    update_reason?: true
  }

  export type Stc_categoryCountAggregateInputType = {
    category_name?: true
    created_date?: true
    updated_date?: true
    update_reason?: true
    _all?: true
  }

  export type Stc_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stc_category to aggregate.
     */
    where?: stc_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stc_categories to fetch.
     */
    orderBy?: stc_categoryOrderByWithRelationInput | stc_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stc_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stc_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stc_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stc_categories
    **/
    _count?: true | Stc_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stc_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stc_categoryMaxAggregateInputType
  }

  export type GetStc_categoryAggregateType<T extends Stc_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStc_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStc_category[P]>
      : GetScalarType<T[P], AggregateStc_category[P]>
  }




  export type stc_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stc_categoryWhereInput
    orderBy?: stc_categoryOrderByWithAggregationInput | stc_categoryOrderByWithAggregationInput[]
    by: Stc_categoryScalarFieldEnum[] | Stc_categoryScalarFieldEnum
    having?: stc_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stc_categoryCountAggregateInputType | true
    _min?: Stc_categoryMinAggregateInputType
    _max?: Stc_categoryMaxAggregateInputType
  }

  export type Stc_categoryGroupByOutputType = {
    category_name: string
    created_date: Date
    updated_date: Date | null
    update_reason: string | null
    _count: Stc_categoryCountAggregateOutputType | null
    _min: Stc_categoryMinAggregateOutputType | null
    _max: Stc_categoryMaxAggregateOutputType | null
  }

  type GetStc_categoryGroupByPayload<T extends stc_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stc_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stc_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stc_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Stc_categoryGroupByOutputType[P]>
        }
      >
    >


  export type stc_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_name?: boolean
    created_date?: boolean
    updated_date?: boolean
    update_reason?: boolean
    a0_task?: boolean | stc_category$a0_taskArgs<ExtArgs>
    _count?: boolean | Stc_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stc_category"]>

  export type stc_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_name?: boolean
    created_date?: boolean
    updated_date?: boolean
    update_reason?: boolean
  }, ExtArgs["result"]["stc_category"]>

  export type stc_categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_name?: boolean
    created_date?: boolean
    updated_date?: boolean
    update_reason?: boolean
  }, ExtArgs["result"]["stc_category"]>

  export type stc_categorySelectScalar = {
    category_name?: boolean
    created_date?: boolean
    updated_date?: boolean
    update_reason?: boolean
  }

  export type stc_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_name" | "created_date" | "updated_date" | "update_reason", ExtArgs["result"]["stc_category"]>
  export type stc_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    a0_task?: boolean | stc_category$a0_taskArgs<ExtArgs>
    _count?: boolean | Stc_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stc_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type stc_categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $stc_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stc_category"
    objects: {
      a0_task: Prisma.$a0_taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_name: string
      created_date: Date
      updated_date: Date | null
      update_reason: string | null
    }, ExtArgs["result"]["stc_category"]>
    composites: {}
  }

  type stc_categoryGetPayload<S extends boolean | null | undefined | stc_categoryDefaultArgs> = $Result.GetResult<Prisma.$stc_categoryPayload, S>

  type stc_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stc_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stc_categoryCountAggregateInputType | true
    }

  export interface stc_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stc_category'], meta: { name: 'stc_category' } }
    /**
     * Find zero or one Stc_category that matches the filter.
     * @param {stc_categoryFindUniqueArgs} args - Arguments to find a Stc_category
     * @example
     * // Get one Stc_category
     * const stc_category = await prisma.stc_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stc_categoryFindUniqueArgs>(args: SelectSubset<T, stc_categoryFindUniqueArgs<ExtArgs>>): Prisma__stc_categoryClient<$Result.GetResult<Prisma.$stc_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stc_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stc_categoryFindUniqueOrThrowArgs} args - Arguments to find a Stc_category
     * @example
     * // Get one Stc_category
     * const stc_category = await prisma.stc_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stc_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, stc_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stc_categoryClient<$Result.GetResult<Prisma.$stc_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stc_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_categoryFindFirstArgs} args - Arguments to find a Stc_category
     * @example
     * // Get one Stc_category
     * const stc_category = await prisma.stc_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stc_categoryFindFirstArgs>(args?: SelectSubset<T, stc_categoryFindFirstArgs<ExtArgs>>): Prisma__stc_categoryClient<$Result.GetResult<Prisma.$stc_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stc_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_categoryFindFirstOrThrowArgs} args - Arguments to find a Stc_category
     * @example
     * // Get one Stc_category
     * const stc_category = await prisma.stc_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stc_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, stc_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__stc_categoryClient<$Result.GetResult<Prisma.$stc_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stc_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stc_categories
     * const stc_categories = await prisma.stc_category.findMany()
     * 
     * // Get first 10 Stc_categories
     * const stc_categories = await prisma.stc_category.findMany({ take: 10 })
     * 
     * // Only select the `category_name`
     * const stc_categoryWithCategory_nameOnly = await prisma.stc_category.findMany({ select: { category_name: true } })
     * 
     */
    findMany<T extends stc_categoryFindManyArgs>(args?: SelectSubset<T, stc_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stc_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stc_category.
     * @param {stc_categoryCreateArgs} args - Arguments to create a Stc_category.
     * @example
     * // Create one Stc_category
     * const Stc_category = await prisma.stc_category.create({
     *   data: {
     *     // ... data to create a Stc_category
     *   }
     * })
     * 
     */
    create<T extends stc_categoryCreateArgs>(args: SelectSubset<T, stc_categoryCreateArgs<ExtArgs>>): Prisma__stc_categoryClient<$Result.GetResult<Prisma.$stc_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stc_categories.
     * @param {stc_categoryCreateManyArgs} args - Arguments to create many Stc_categories.
     * @example
     * // Create many Stc_categories
     * const stc_category = await prisma.stc_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stc_categoryCreateManyArgs>(args?: SelectSubset<T, stc_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stc_categories and returns the data saved in the database.
     * @param {stc_categoryCreateManyAndReturnArgs} args - Arguments to create many Stc_categories.
     * @example
     * // Create many Stc_categories
     * const stc_category = await prisma.stc_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stc_categories and only return the `category_name`
     * const stc_categoryWithCategory_nameOnly = await prisma.stc_category.createManyAndReturn({
     *   select: { category_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stc_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, stc_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stc_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stc_category.
     * @param {stc_categoryDeleteArgs} args - Arguments to delete one Stc_category.
     * @example
     * // Delete one Stc_category
     * const Stc_category = await prisma.stc_category.delete({
     *   where: {
     *     // ... filter to delete one Stc_category
     *   }
     * })
     * 
     */
    delete<T extends stc_categoryDeleteArgs>(args: SelectSubset<T, stc_categoryDeleteArgs<ExtArgs>>): Prisma__stc_categoryClient<$Result.GetResult<Prisma.$stc_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stc_category.
     * @param {stc_categoryUpdateArgs} args - Arguments to update one Stc_category.
     * @example
     * // Update one Stc_category
     * const stc_category = await prisma.stc_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stc_categoryUpdateArgs>(args: SelectSubset<T, stc_categoryUpdateArgs<ExtArgs>>): Prisma__stc_categoryClient<$Result.GetResult<Prisma.$stc_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stc_categories.
     * @param {stc_categoryDeleteManyArgs} args - Arguments to filter Stc_categories to delete.
     * @example
     * // Delete a few Stc_categories
     * const { count } = await prisma.stc_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stc_categoryDeleteManyArgs>(args?: SelectSubset<T, stc_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stc_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stc_categories
     * const stc_category = await prisma.stc_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stc_categoryUpdateManyArgs>(args: SelectSubset<T, stc_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stc_categories and returns the data updated in the database.
     * @param {stc_categoryUpdateManyAndReturnArgs} args - Arguments to update many Stc_categories.
     * @example
     * // Update many Stc_categories
     * const stc_category = await prisma.stc_category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stc_categories and only return the `category_name`
     * const stc_categoryWithCategory_nameOnly = await prisma.stc_category.updateManyAndReturn({
     *   select: { category_name: true },
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
    updateManyAndReturn<T extends stc_categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, stc_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stc_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stc_category.
     * @param {stc_categoryUpsertArgs} args - Arguments to update or create a Stc_category.
     * @example
     * // Update or create a Stc_category
     * const stc_category = await prisma.stc_category.upsert({
     *   create: {
     *     // ... data to create a Stc_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stc_category we want to update
     *   }
     * })
     */
    upsert<T extends stc_categoryUpsertArgs>(args: SelectSubset<T, stc_categoryUpsertArgs<ExtArgs>>): Prisma__stc_categoryClient<$Result.GetResult<Prisma.$stc_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stc_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_categoryCountArgs} args - Arguments to filter Stc_categories to count.
     * @example
     * // Count the number of Stc_categories
     * const count = await prisma.stc_category.count({
     *   where: {
     *     // ... the filter for the Stc_categories we want to count
     *   }
     * })
    **/
    count<T extends stc_categoryCountArgs>(
      args?: Subset<T, stc_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stc_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stc_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stc_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Stc_categoryAggregateArgs>(args: Subset<T, Stc_categoryAggregateArgs>): Prisma.PrismaPromise<GetStc_categoryAggregateType<T>>

    /**
     * Group by Stc_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_categoryGroupByArgs} args - Group by arguments.
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
      T extends stc_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stc_categoryGroupByArgs['orderBy'] }
        : { orderBy?: stc_categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stc_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStc_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stc_category model
   */
  readonly fields: stc_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stc_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stc_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    a0_task<T extends stc_category$a0_taskArgs<ExtArgs> = {}>(args?: Subset<T, stc_category$a0_taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the stc_category model
   */
  interface stc_categoryFieldRefs {
    readonly category_name: FieldRef<"stc_category", 'String'>
    readonly created_date: FieldRef<"stc_category", 'DateTime'>
    readonly updated_date: FieldRef<"stc_category", 'DateTime'>
    readonly update_reason: FieldRef<"stc_category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stc_category findUnique
   */
  export type stc_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_category
     */
    select?: stc_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_category
     */
    omit?: stc_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_categoryInclude<ExtArgs> | null
    /**
     * Filter, which stc_category to fetch.
     */
    where: stc_categoryWhereUniqueInput
  }

  /**
   * stc_category findUniqueOrThrow
   */
  export type stc_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_category
     */
    select?: stc_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_category
     */
    omit?: stc_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_categoryInclude<ExtArgs> | null
    /**
     * Filter, which stc_category to fetch.
     */
    where: stc_categoryWhereUniqueInput
  }

  /**
   * stc_category findFirst
   */
  export type stc_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_category
     */
    select?: stc_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_category
     */
    omit?: stc_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_categoryInclude<ExtArgs> | null
    /**
     * Filter, which stc_category to fetch.
     */
    where?: stc_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stc_categories to fetch.
     */
    orderBy?: stc_categoryOrderByWithRelationInput | stc_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stc_categories.
     */
    cursor?: stc_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stc_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stc_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stc_categories.
     */
    distinct?: Stc_categoryScalarFieldEnum | Stc_categoryScalarFieldEnum[]
  }

  /**
   * stc_category findFirstOrThrow
   */
  export type stc_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_category
     */
    select?: stc_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_category
     */
    omit?: stc_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_categoryInclude<ExtArgs> | null
    /**
     * Filter, which stc_category to fetch.
     */
    where?: stc_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stc_categories to fetch.
     */
    orderBy?: stc_categoryOrderByWithRelationInput | stc_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stc_categories.
     */
    cursor?: stc_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stc_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stc_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stc_categories.
     */
    distinct?: Stc_categoryScalarFieldEnum | Stc_categoryScalarFieldEnum[]
  }

  /**
   * stc_category findMany
   */
  export type stc_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_category
     */
    select?: stc_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_category
     */
    omit?: stc_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_categoryInclude<ExtArgs> | null
    /**
     * Filter, which stc_categories to fetch.
     */
    where?: stc_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stc_categories to fetch.
     */
    orderBy?: stc_categoryOrderByWithRelationInput | stc_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stc_categories.
     */
    cursor?: stc_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stc_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stc_categories.
     */
    skip?: number
    distinct?: Stc_categoryScalarFieldEnum | Stc_categoryScalarFieldEnum[]
  }

  /**
   * stc_category create
   */
  export type stc_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_category
     */
    select?: stc_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_category
     */
    omit?: stc_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a stc_category.
     */
    data: XOR<stc_categoryCreateInput, stc_categoryUncheckedCreateInput>
  }

  /**
   * stc_category createMany
   */
  export type stc_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stc_categories.
     */
    data: stc_categoryCreateManyInput | stc_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stc_category createManyAndReturn
   */
  export type stc_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_category
     */
    select?: stc_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stc_category
     */
    omit?: stc_categoryOmit<ExtArgs> | null
    /**
     * The data used to create many stc_categories.
     */
    data: stc_categoryCreateManyInput | stc_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stc_category update
   */
  export type stc_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_category
     */
    select?: stc_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_category
     */
    omit?: stc_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a stc_category.
     */
    data: XOR<stc_categoryUpdateInput, stc_categoryUncheckedUpdateInput>
    /**
     * Choose, which stc_category to update.
     */
    where: stc_categoryWhereUniqueInput
  }

  /**
   * stc_category updateMany
   */
  export type stc_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stc_categories.
     */
    data: XOR<stc_categoryUpdateManyMutationInput, stc_categoryUncheckedUpdateManyInput>
    /**
     * Filter which stc_categories to update
     */
    where?: stc_categoryWhereInput
    /**
     * Limit how many stc_categories to update.
     */
    limit?: number
  }

  /**
   * stc_category updateManyAndReturn
   */
  export type stc_categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_category
     */
    select?: stc_categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stc_category
     */
    omit?: stc_categoryOmit<ExtArgs> | null
    /**
     * The data used to update stc_categories.
     */
    data: XOR<stc_categoryUpdateManyMutationInput, stc_categoryUncheckedUpdateManyInput>
    /**
     * Filter which stc_categories to update
     */
    where?: stc_categoryWhereInput
    /**
     * Limit how many stc_categories to update.
     */
    limit?: number
  }

  /**
   * stc_category upsert
   */
  export type stc_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_category
     */
    select?: stc_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_category
     */
    omit?: stc_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the stc_category to update in case it exists.
     */
    where: stc_categoryWhereUniqueInput
    /**
     * In case the stc_category found by the `where` argument doesn't exist, create a new stc_category with this data.
     */
    create: XOR<stc_categoryCreateInput, stc_categoryUncheckedCreateInput>
    /**
     * In case the stc_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stc_categoryUpdateInput, stc_categoryUncheckedUpdateInput>
  }

  /**
   * stc_category delete
   */
  export type stc_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_category
     */
    select?: stc_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_category
     */
    omit?: stc_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_categoryInclude<ExtArgs> | null
    /**
     * Filter which stc_category to delete.
     */
    where: stc_categoryWhereUniqueInput
  }

  /**
   * stc_category deleteMany
   */
  export type stc_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stc_categories to delete
     */
    where?: stc_categoryWhereInput
    /**
     * Limit how many stc_categories to delete.
     */
    limit?: number
  }

  /**
   * stc_category.a0_task
   */
  export type stc_category$a0_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
    where?: a0_taskWhereInput
    orderBy?: a0_taskOrderByWithRelationInput | a0_taskOrderByWithRelationInput[]
    cursor?: a0_taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: A0_taskScalarFieldEnum | A0_taskScalarFieldEnum[]
  }

  /**
   * stc_category without action
   */
  export type stc_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_category
     */
    select?: stc_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_category
     */
    omit?: stc_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_categoryInclude<ExtArgs> | null
  }


  /**
   * Model stc_priority
   */

  export type AggregateStc_priority = {
    _count: Stc_priorityCountAggregateOutputType | null
    _min: Stc_priorityMinAggregateOutputType | null
    _max: Stc_priorityMaxAggregateOutputType | null
  }

  export type Stc_priorityMinAggregateOutputType = {
    app_priority: string | null
    created_date: Date | null
    updated_date: Date | null
    update_reason: string | null
  }

  export type Stc_priorityMaxAggregateOutputType = {
    app_priority: string | null
    created_date: Date | null
    updated_date: Date | null
    update_reason: string | null
  }

  export type Stc_priorityCountAggregateOutputType = {
    app_priority: number
    created_date: number
    updated_date: number
    update_reason: number
    _all: number
  }


  export type Stc_priorityMinAggregateInputType = {
    app_priority?: true
    created_date?: true
    updated_date?: true
    update_reason?: true
  }

  export type Stc_priorityMaxAggregateInputType = {
    app_priority?: true
    created_date?: true
    updated_date?: true
    update_reason?: true
  }

  export type Stc_priorityCountAggregateInputType = {
    app_priority?: true
    created_date?: true
    updated_date?: true
    update_reason?: true
    _all?: true
  }

  export type Stc_priorityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stc_priority to aggregate.
     */
    where?: stc_priorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stc_priorities to fetch.
     */
    orderBy?: stc_priorityOrderByWithRelationInput | stc_priorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stc_priorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stc_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stc_priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stc_priorities
    **/
    _count?: true | Stc_priorityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stc_priorityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stc_priorityMaxAggregateInputType
  }

  export type GetStc_priorityAggregateType<T extends Stc_priorityAggregateArgs> = {
        [P in keyof T & keyof AggregateStc_priority]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStc_priority[P]>
      : GetScalarType<T[P], AggregateStc_priority[P]>
  }




  export type stc_priorityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stc_priorityWhereInput
    orderBy?: stc_priorityOrderByWithAggregationInput | stc_priorityOrderByWithAggregationInput[]
    by: Stc_priorityScalarFieldEnum[] | Stc_priorityScalarFieldEnum
    having?: stc_priorityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stc_priorityCountAggregateInputType | true
    _min?: Stc_priorityMinAggregateInputType
    _max?: Stc_priorityMaxAggregateInputType
  }

  export type Stc_priorityGroupByOutputType = {
    app_priority: string
    created_date: Date
    updated_date: Date | null
    update_reason: string | null
    _count: Stc_priorityCountAggregateOutputType | null
    _min: Stc_priorityMinAggregateOutputType | null
    _max: Stc_priorityMaxAggregateOutputType | null
  }

  type GetStc_priorityGroupByPayload<T extends stc_priorityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stc_priorityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stc_priorityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stc_priorityGroupByOutputType[P]>
            : GetScalarType<T[P], Stc_priorityGroupByOutputType[P]>
        }
      >
    >


  export type stc_prioritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    app_priority?: boolean
    created_date?: boolean
    updated_date?: boolean
    update_reason?: boolean
    a0_task?: boolean | stc_priority$a0_taskArgs<ExtArgs>
    _count?: boolean | Stc_priorityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stc_priority"]>

  export type stc_prioritySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    app_priority?: boolean
    created_date?: boolean
    updated_date?: boolean
    update_reason?: boolean
  }, ExtArgs["result"]["stc_priority"]>

  export type stc_prioritySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    app_priority?: boolean
    created_date?: boolean
    updated_date?: boolean
    update_reason?: boolean
  }, ExtArgs["result"]["stc_priority"]>

  export type stc_prioritySelectScalar = {
    app_priority?: boolean
    created_date?: boolean
    updated_date?: boolean
    update_reason?: boolean
  }

  export type stc_priorityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"app_priority" | "created_date" | "updated_date" | "update_reason", ExtArgs["result"]["stc_priority"]>
  export type stc_priorityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    a0_task?: boolean | stc_priority$a0_taskArgs<ExtArgs>
    _count?: boolean | Stc_priorityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stc_priorityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type stc_priorityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $stc_priorityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stc_priority"
    objects: {
      a0_task: Prisma.$a0_taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      app_priority: string
      created_date: Date
      updated_date: Date | null
      update_reason: string | null
    }, ExtArgs["result"]["stc_priority"]>
    composites: {}
  }

  type stc_priorityGetPayload<S extends boolean | null | undefined | stc_priorityDefaultArgs> = $Result.GetResult<Prisma.$stc_priorityPayload, S>

  type stc_priorityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stc_priorityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stc_priorityCountAggregateInputType | true
    }

  export interface stc_priorityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stc_priority'], meta: { name: 'stc_priority' } }
    /**
     * Find zero or one Stc_priority that matches the filter.
     * @param {stc_priorityFindUniqueArgs} args - Arguments to find a Stc_priority
     * @example
     * // Get one Stc_priority
     * const stc_priority = await prisma.stc_priority.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stc_priorityFindUniqueArgs>(args: SelectSubset<T, stc_priorityFindUniqueArgs<ExtArgs>>): Prisma__stc_priorityClient<$Result.GetResult<Prisma.$stc_priorityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stc_priority that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stc_priorityFindUniqueOrThrowArgs} args - Arguments to find a Stc_priority
     * @example
     * // Get one Stc_priority
     * const stc_priority = await prisma.stc_priority.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stc_priorityFindUniqueOrThrowArgs>(args: SelectSubset<T, stc_priorityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stc_priorityClient<$Result.GetResult<Prisma.$stc_priorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stc_priority that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_priorityFindFirstArgs} args - Arguments to find a Stc_priority
     * @example
     * // Get one Stc_priority
     * const stc_priority = await prisma.stc_priority.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stc_priorityFindFirstArgs>(args?: SelectSubset<T, stc_priorityFindFirstArgs<ExtArgs>>): Prisma__stc_priorityClient<$Result.GetResult<Prisma.$stc_priorityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stc_priority that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_priorityFindFirstOrThrowArgs} args - Arguments to find a Stc_priority
     * @example
     * // Get one Stc_priority
     * const stc_priority = await prisma.stc_priority.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stc_priorityFindFirstOrThrowArgs>(args?: SelectSubset<T, stc_priorityFindFirstOrThrowArgs<ExtArgs>>): Prisma__stc_priorityClient<$Result.GetResult<Prisma.$stc_priorityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stc_priorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_priorityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stc_priorities
     * const stc_priorities = await prisma.stc_priority.findMany()
     * 
     * // Get first 10 Stc_priorities
     * const stc_priorities = await prisma.stc_priority.findMany({ take: 10 })
     * 
     * // Only select the `app_priority`
     * const stc_priorityWithApp_priorityOnly = await prisma.stc_priority.findMany({ select: { app_priority: true } })
     * 
     */
    findMany<T extends stc_priorityFindManyArgs>(args?: SelectSubset<T, stc_priorityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stc_priorityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stc_priority.
     * @param {stc_priorityCreateArgs} args - Arguments to create a Stc_priority.
     * @example
     * // Create one Stc_priority
     * const Stc_priority = await prisma.stc_priority.create({
     *   data: {
     *     // ... data to create a Stc_priority
     *   }
     * })
     * 
     */
    create<T extends stc_priorityCreateArgs>(args: SelectSubset<T, stc_priorityCreateArgs<ExtArgs>>): Prisma__stc_priorityClient<$Result.GetResult<Prisma.$stc_priorityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stc_priorities.
     * @param {stc_priorityCreateManyArgs} args - Arguments to create many Stc_priorities.
     * @example
     * // Create many Stc_priorities
     * const stc_priority = await prisma.stc_priority.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stc_priorityCreateManyArgs>(args?: SelectSubset<T, stc_priorityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stc_priorities and returns the data saved in the database.
     * @param {stc_priorityCreateManyAndReturnArgs} args - Arguments to create many Stc_priorities.
     * @example
     * // Create many Stc_priorities
     * const stc_priority = await prisma.stc_priority.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stc_priorities and only return the `app_priority`
     * const stc_priorityWithApp_priorityOnly = await prisma.stc_priority.createManyAndReturn({
     *   select: { app_priority: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stc_priorityCreateManyAndReturnArgs>(args?: SelectSubset<T, stc_priorityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stc_priorityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stc_priority.
     * @param {stc_priorityDeleteArgs} args - Arguments to delete one Stc_priority.
     * @example
     * // Delete one Stc_priority
     * const Stc_priority = await prisma.stc_priority.delete({
     *   where: {
     *     // ... filter to delete one Stc_priority
     *   }
     * })
     * 
     */
    delete<T extends stc_priorityDeleteArgs>(args: SelectSubset<T, stc_priorityDeleteArgs<ExtArgs>>): Prisma__stc_priorityClient<$Result.GetResult<Prisma.$stc_priorityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stc_priority.
     * @param {stc_priorityUpdateArgs} args - Arguments to update one Stc_priority.
     * @example
     * // Update one Stc_priority
     * const stc_priority = await prisma.stc_priority.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stc_priorityUpdateArgs>(args: SelectSubset<T, stc_priorityUpdateArgs<ExtArgs>>): Prisma__stc_priorityClient<$Result.GetResult<Prisma.$stc_priorityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stc_priorities.
     * @param {stc_priorityDeleteManyArgs} args - Arguments to filter Stc_priorities to delete.
     * @example
     * // Delete a few Stc_priorities
     * const { count } = await prisma.stc_priority.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stc_priorityDeleteManyArgs>(args?: SelectSubset<T, stc_priorityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stc_priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_priorityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stc_priorities
     * const stc_priority = await prisma.stc_priority.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stc_priorityUpdateManyArgs>(args: SelectSubset<T, stc_priorityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stc_priorities and returns the data updated in the database.
     * @param {stc_priorityUpdateManyAndReturnArgs} args - Arguments to update many Stc_priorities.
     * @example
     * // Update many Stc_priorities
     * const stc_priority = await prisma.stc_priority.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stc_priorities and only return the `app_priority`
     * const stc_priorityWithApp_priorityOnly = await prisma.stc_priority.updateManyAndReturn({
     *   select: { app_priority: true },
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
    updateManyAndReturn<T extends stc_priorityUpdateManyAndReturnArgs>(args: SelectSubset<T, stc_priorityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stc_priorityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stc_priority.
     * @param {stc_priorityUpsertArgs} args - Arguments to update or create a Stc_priority.
     * @example
     * // Update or create a Stc_priority
     * const stc_priority = await prisma.stc_priority.upsert({
     *   create: {
     *     // ... data to create a Stc_priority
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stc_priority we want to update
     *   }
     * })
     */
    upsert<T extends stc_priorityUpsertArgs>(args: SelectSubset<T, stc_priorityUpsertArgs<ExtArgs>>): Prisma__stc_priorityClient<$Result.GetResult<Prisma.$stc_priorityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stc_priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_priorityCountArgs} args - Arguments to filter Stc_priorities to count.
     * @example
     * // Count the number of Stc_priorities
     * const count = await prisma.stc_priority.count({
     *   where: {
     *     // ... the filter for the Stc_priorities we want to count
     *   }
     * })
    **/
    count<T extends stc_priorityCountArgs>(
      args?: Subset<T, stc_priorityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stc_priorityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stc_priority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stc_priorityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Stc_priorityAggregateArgs>(args: Subset<T, Stc_priorityAggregateArgs>): Prisma.PrismaPromise<GetStc_priorityAggregateType<T>>

    /**
     * Group by Stc_priority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_priorityGroupByArgs} args - Group by arguments.
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
      T extends stc_priorityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stc_priorityGroupByArgs['orderBy'] }
        : { orderBy?: stc_priorityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stc_priorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStc_priorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stc_priority model
   */
  readonly fields: stc_priorityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stc_priority.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stc_priorityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    a0_task<T extends stc_priority$a0_taskArgs<ExtArgs> = {}>(args?: Subset<T, stc_priority$a0_taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the stc_priority model
   */
  interface stc_priorityFieldRefs {
    readonly app_priority: FieldRef<"stc_priority", 'String'>
    readonly created_date: FieldRef<"stc_priority", 'DateTime'>
    readonly updated_date: FieldRef<"stc_priority", 'DateTime'>
    readonly update_reason: FieldRef<"stc_priority", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stc_priority findUnique
   */
  export type stc_priorityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_priority
     */
    select?: stc_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_priority
     */
    omit?: stc_priorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_priorityInclude<ExtArgs> | null
    /**
     * Filter, which stc_priority to fetch.
     */
    where: stc_priorityWhereUniqueInput
  }

  /**
   * stc_priority findUniqueOrThrow
   */
  export type stc_priorityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_priority
     */
    select?: stc_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_priority
     */
    omit?: stc_priorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_priorityInclude<ExtArgs> | null
    /**
     * Filter, which stc_priority to fetch.
     */
    where: stc_priorityWhereUniqueInput
  }

  /**
   * stc_priority findFirst
   */
  export type stc_priorityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_priority
     */
    select?: stc_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_priority
     */
    omit?: stc_priorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_priorityInclude<ExtArgs> | null
    /**
     * Filter, which stc_priority to fetch.
     */
    where?: stc_priorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stc_priorities to fetch.
     */
    orderBy?: stc_priorityOrderByWithRelationInput | stc_priorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stc_priorities.
     */
    cursor?: stc_priorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stc_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stc_priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stc_priorities.
     */
    distinct?: Stc_priorityScalarFieldEnum | Stc_priorityScalarFieldEnum[]
  }

  /**
   * stc_priority findFirstOrThrow
   */
  export type stc_priorityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_priority
     */
    select?: stc_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_priority
     */
    omit?: stc_priorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_priorityInclude<ExtArgs> | null
    /**
     * Filter, which stc_priority to fetch.
     */
    where?: stc_priorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stc_priorities to fetch.
     */
    orderBy?: stc_priorityOrderByWithRelationInput | stc_priorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stc_priorities.
     */
    cursor?: stc_priorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stc_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stc_priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stc_priorities.
     */
    distinct?: Stc_priorityScalarFieldEnum | Stc_priorityScalarFieldEnum[]
  }

  /**
   * stc_priority findMany
   */
  export type stc_priorityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_priority
     */
    select?: stc_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_priority
     */
    omit?: stc_priorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_priorityInclude<ExtArgs> | null
    /**
     * Filter, which stc_priorities to fetch.
     */
    where?: stc_priorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stc_priorities to fetch.
     */
    orderBy?: stc_priorityOrderByWithRelationInput | stc_priorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stc_priorities.
     */
    cursor?: stc_priorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stc_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stc_priorities.
     */
    skip?: number
    distinct?: Stc_priorityScalarFieldEnum | Stc_priorityScalarFieldEnum[]
  }

  /**
   * stc_priority create
   */
  export type stc_priorityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_priority
     */
    select?: stc_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_priority
     */
    omit?: stc_priorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_priorityInclude<ExtArgs> | null
    /**
     * The data needed to create a stc_priority.
     */
    data: XOR<stc_priorityCreateInput, stc_priorityUncheckedCreateInput>
  }

  /**
   * stc_priority createMany
   */
  export type stc_priorityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stc_priorities.
     */
    data: stc_priorityCreateManyInput | stc_priorityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stc_priority createManyAndReturn
   */
  export type stc_priorityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_priority
     */
    select?: stc_prioritySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stc_priority
     */
    omit?: stc_priorityOmit<ExtArgs> | null
    /**
     * The data used to create many stc_priorities.
     */
    data: stc_priorityCreateManyInput | stc_priorityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stc_priority update
   */
  export type stc_priorityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_priority
     */
    select?: stc_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_priority
     */
    omit?: stc_priorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_priorityInclude<ExtArgs> | null
    /**
     * The data needed to update a stc_priority.
     */
    data: XOR<stc_priorityUpdateInput, stc_priorityUncheckedUpdateInput>
    /**
     * Choose, which stc_priority to update.
     */
    where: stc_priorityWhereUniqueInput
  }

  /**
   * stc_priority updateMany
   */
  export type stc_priorityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stc_priorities.
     */
    data: XOR<stc_priorityUpdateManyMutationInput, stc_priorityUncheckedUpdateManyInput>
    /**
     * Filter which stc_priorities to update
     */
    where?: stc_priorityWhereInput
    /**
     * Limit how many stc_priorities to update.
     */
    limit?: number
  }

  /**
   * stc_priority updateManyAndReturn
   */
  export type stc_priorityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_priority
     */
    select?: stc_prioritySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stc_priority
     */
    omit?: stc_priorityOmit<ExtArgs> | null
    /**
     * The data used to update stc_priorities.
     */
    data: XOR<stc_priorityUpdateManyMutationInput, stc_priorityUncheckedUpdateManyInput>
    /**
     * Filter which stc_priorities to update
     */
    where?: stc_priorityWhereInput
    /**
     * Limit how many stc_priorities to update.
     */
    limit?: number
  }

  /**
   * stc_priority upsert
   */
  export type stc_priorityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_priority
     */
    select?: stc_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_priority
     */
    omit?: stc_priorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_priorityInclude<ExtArgs> | null
    /**
     * The filter to search for the stc_priority to update in case it exists.
     */
    where: stc_priorityWhereUniqueInput
    /**
     * In case the stc_priority found by the `where` argument doesn't exist, create a new stc_priority with this data.
     */
    create: XOR<stc_priorityCreateInput, stc_priorityUncheckedCreateInput>
    /**
     * In case the stc_priority was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stc_priorityUpdateInput, stc_priorityUncheckedUpdateInput>
  }

  /**
   * stc_priority delete
   */
  export type stc_priorityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_priority
     */
    select?: stc_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_priority
     */
    omit?: stc_priorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_priorityInclude<ExtArgs> | null
    /**
     * Filter which stc_priority to delete.
     */
    where: stc_priorityWhereUniqueInput
  }

  /**
   * stc_priority deleteMany
   */
  export type stc_priorityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stc_priorities to delete
     */
    where?: stc_priorityWhereInput
    /**
     * Limit how many stc_priorities to delete.
     */
    limit?: number
  }

  /**
   * stc_priority.a0_task
   */
  export type stc_priority$a0_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
    where?: a0_taskWhereInput
    orderBy?: a0_taskOrderByWithRelationInput | a0_taskOrderByWithRelationInput[]
    cursor?: a0_taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: A0_taskScalarFieldEnum | A0_taskScalarFieldEnum[]
  }

  /**
   * stc_priority without action
   */
  export type stc_priorityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_priority
     */
    select?: stc_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_priority
     */
    omit?: stc_priorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_priorityInclude<ExtArgs> | null
  }


  /**
   * Model stc_status
   */

  export type AggregateStc_status = {
    _count: Stc_statusCountAggregateOutputType | null
    _min: Stc_statusMinAggregateOutputType | null
    _max: Stc_statusMaxAggregateOutputType | null
  }

  export type Stc_statusMinAggregateOutputType = {
    app_status: string | null
    created_date: Date | null
    updated_date: Date | null
    update_reason: string | null
  }

  export type Stc_statusMaxAggregateOutputType = {
    app_status: string | null
    created_date: Date | null
    updated_date: Date | null
    update_reason: string | null
  }

  export type Stc_statusCountAggregateOutputType = {
    app_status: number
    created_date: number
    updated_date: number
    update_reason: number
    _all: number
  }


  export type Stc_statusMinAggregateInputType = {
    app_status?: true
    created_date?: true
    updated_date?: true
    update_reason?: true
  }

  export type Stc_statusMaxAggregateInputType = {
    app_status?: true
    created_date?: true
    updated_date?: true
    update_reason?: true
  }

  export type Stc_statusCountAggregateInputType = {
    app_status?: true
    created_date?: true
    updated_date?: true
    update_reason?: true
    _all?: true
  }

  export type Stc_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stc_status to aggregate.
     */
    where?: stc_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stc_statuses to fetch.
     */
    orderBy?: stc_statusOrderByWithRelationInput | stc_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stc_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stc_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stc_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stc_statuses
    **/
    _count?: true | Stc_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stc_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stc_statusMaxAggregateInputType
  }

  export type GetStc_statusAggregateType<T extends Stc_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateStc_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStc_status[P]>
      : GetScalarType<T[P], AggregateStc_status[P]>
  }




  export type stc_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stc_statusWhereInput
    orderBy?: stc_statusOrderByWithAggregationInput | stc_statusOrderByWithAggregationInput[]
    by: Stc_statusScalarFieldEnum[] | Stc_statusScalarFieldEnum
    having?: stc_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stc_statusCountAggregateInputType | true
    _min?: Stc_statusMinAggregateInputType
    _max?: Stc_statusMaxAggregateInputType
  }

  export type Stc_statusGroupByOutputType = {
    app_status: string
    created_date: Date
    updated_date: Date | null
    update_reason: string | null
    _count: Stc_statusCountAggregateOutputType | null
    _min: Stc_statusMinAggregateOutputType | null
    _max: Stc_statusMaxAggregateOutputType | null
  }

  type GetStc_statusGroupByPayload<T extends stc_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stc_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stc_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stc_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Stc_statusGroupByOutputType[P]>
        }
      >
    >


  export type stc_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    app_status?: boolean
    created_date?: boolean
    updated_date?: boolean
    update_reason?: boolean
    a0_task?: boolean | stc_status$a0_taskArgs<ExtArgs>
    _count?: boolean | Stc_statusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stc_status"]>

  export type stc_statusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    app_status?: boolean
    created_date?: boolean
    updated_date?: boolean
    update_reason?: boolean
  }, ExtArgs["result"]["stc_status"]>

  export type stc_statusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    app_status?: boolean
    created_date?: boolean
    updated_date?: boolean
    update_reason?: boolean
  }, ExtArgs["result"]["stc_status"]>

  export type stc_statusSelectScalar = {
    app_status?: boolean
    created_date?: boolean
    updated_date?: boolean
    update_reason?: boolean
  }

  export type stc_statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"app_status" | "created_date" | "updated_date" | "update_reason", ExtArgs["result"]["stc_status"]>
  export type stc_statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    a0_task?: boolean | stc_status$a0_taskArgs<ExtArgs>
    _count?: boolean | Stc_statusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stc_statusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type stc_statusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $stc_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stc_status"
    objects: {
      a0_task: Prisma.$a0_taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      app_status: string
      created_date: Date
      updated_date: Date | null
      update_reason: string | null
    }, ExtArgs["result"]["stc_status"]>
    composites: {}
  }

  type stc_statusGetPayload<S extends boolean | null | undefined | stc_statusDefaultArgs> = $Result.GetResult<Prisma.$stc_statusPayload, S>

  type stc_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stc_statusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stc_statusCountAggregateInputType | true
    }

  export interface stc_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stc_status'], meta: { name: 'stc_status' } }
    /**
     * Find zero or one Stc_status that matches the filter.
     * @param {stc_statusFindUniqueArgs} args - Arguments to find a Stc_status
     * @example
     * // Get one Stc_status
     * const stc_status = await prisma.stc_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stc_statusFindUniqueArgs>(args: SelectSubset<T, stc_statusFindUniqueArgs<ExtArgs>>): Prisma__stc_statusClient<$Result.GetResult<Prisma.$stc_statusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stc_status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stc_statusFindUniqueOrThrowArgs} args - Arguments to find a Stc_status
     * @example
     * // Get one Stc_status
     * const stc_status = await prisma.stc_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stc_statusFindUniqueOrThrowArgs>(args: SelectSubset<T, stc_statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stc_statusClient<$Result.GetResult<Prisma.$stc_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stc_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_statusFindFirstArgs} args - Arguments to find a Stc_status
     * @example
     * // Get one Stc_status
     * const stc_status = await prisma.stc_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stc_statusFindFirstArgs>(args?: SelectSubset<T, stc_statusFindFirstArgs<ExtArgs>>): Prisma__stc_statusClient<$Result.GetResult<Prisma.$stc_statusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stc_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_statusFindFirstOrThrowArgs} args - Arguments to find a Stc_status
     * @example
     * // Get one Stc_status
     * const stc_status = await prisma.stc_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stc_statusFindFirstOrThrowArgs>(args?: SelectSubset<T, stc_statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__stc_statusClient<$Result.GetResult<Prisma.$stc_statusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stc_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stc_statuses
     * const stc_statuses = await prisma.stc_status.findMany()
     * 
     * // Get first 10 Stc_statuses
     * const stc_statuses = await prisma.stc_status.findMany({ take: 10 })
     * 
     * // Only select the `app_status`
     * const stc_statusWithApp_statusOnly = await prisma.stc_status.findMany({ select: { app_status: true } })
     * 
     */
    findMany<T extends stc_statusFindManyArgs>(args?: SelectSubset<T, stc_statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stc_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stc_status.
     * @param {stc_statusCreateArgs} args - Arguments to create a Stc_status.
     * @example
     * // Create one Stc_status
     * const Stc_status = await prisma.stc_status.create({
     *   data: {
     *     // ... data to create a Stc_status
     *   }
     * })
     * 
     */
    create<T extends stc_statusCreateArgs>(args: SelectSubset<T, stc_statusCreateArgs<ExtArgs>>): Prisma__stc_statusClient<$Result.GetResult<Prisma.$stc_statusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stc_statuses.
     * @param {stc_statusCreateManyArgs} args - Arguments to create many Stc_statuses.
     * @example
     * // Create many Stc_statuses
     * const stc_status = await prisma.stc_status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stc_statusCreateManyArgs>(args?: SelectSubset<T, stc_statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stc_statuses and returns the data saved in the database.
     * @param {stc_statusCreateManyAndReturnArgs} args - Arguments to create many Stc_statuses.
     * @example
     * // Create many Stc_statuses
     * const stc_status = await prisma.stc_status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stc_statuses and only return the `app_status`
     * const stc_statusWithApp_statusOnly = await prisma.stc_status.createManyAndReturn({
     *   select: { app_status: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stc_statusCreateManyAndReturnArgs>(args?: SelectSubset<T, stc_statusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stc_statusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stc_status.
     * @param {stc_statusDeleteArgs} args - Arguments to delete one Stc_status.
     * @example
     * // Delete one Stc_status
     * const Stc_status = await prisma.stc_status.delete({
     *   where: {
     *     // ... filter to delete one Stc_status
     *   }
     * })
     * 
     */
    delete<T extends stc_statusDeleteArgs>(args: SelectSubset<T, stc_statusDeleteArgs<ExtArgs>>): Prisma__stc_statusClient<$Result.GetResult<Prisma.$stc_statusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stc_status.
     * @param {stc_statusUpdateArgs} args - Arguments to update one Stc_status.
     * @example
     * // Update one Stc_status
     * const stc_status = await prisma.stc_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stc_statusUpdateArgs>(args: SelectSubset<T, stc_statusUpdateArgs<ExtArgs>>): Prisma__stc_statusClient<$Result.GetResult<Prisma.$stc_statusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stc_statuses.
     * @param {stc_statusDeleteManyArgs} args - Arguments to filter Stc_statuses to delete.
     * @example
     * // Delete a few Stc_statuses
     * const { count } = await prisma.stc_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stc_statusDeleteManyArgs>(args?: SelectSubset<T, stc_statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stc_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stc_statuses
     * const stc_status = await prisma.stc_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stc_statusUpdateManyArgs>(args: SelectSubset<T, stc_statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stc_statuses and returns the data updated in the database.
     * @param {stc_statusUpdateManyAndReturnArgs} args - Arguments to update many Stc_statuses.
     * @example
     * // Update many Stc_statuses
     * const stc_status = await prisma.stc_status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stc_statuses and only return the `app_status`
     * const stc_statusWithApp_statusOnly = await prisma.stc_status.updateManyAndReturn({
     *   select: { app_status: true },
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
    updateManyAndReturn<T extends stc_statusUpdateManyAndReturnArgs>(args: SelectSubset<T, stc_statusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stc_statusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stc_status.
     * @param {stc_statusUpsertArgs} args - Arguments to update or create a Stc_status.
     * @example
     * // Update or create a Stc_status
     * const stc_status = await prisma.stc_status.upsert({
     *   create: {
     *     // ... data to create a Stc_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stc_status we want to update
     *   }
     * })
     */
    upsert<T extends stc_statusUpsertArgs>(args: SelectSubset<T, stc_statusUpsertArgs<ExtArgs>>): Prisma__stc_statusClient<$Result.GetResult<Prisma.$stc_statusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stc_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_statusCountArgs} args - Arguments to filter Stc_statuses to count.
     * @example
     * // Count the number of Stc_statuses
     * const count = await prisma.stc_status.count({
     *   where: {
     *     // ... the filter for the Stc_statuses we want to count
     *   }
     * })
    **/
    count<T extends stc_statusCountArgs>(
      args?: Subset<T, stc_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stc_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stc_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stc_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Stc_statusAggregateArgs>(args: Subset<T, Stc_statusAggregateArgs>): Prisma.PrismaPromise<GetStc_statusAggregateType<T>>

    /**
     * Group by Stc_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stc_statusGroupByArgs} args - Group by arguments.
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
      T extends stc_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stc_statusGroupByArgs['orderBy'] }
        : { orderBy?: stc_statusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stc_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStc_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stc_status model
   */
  readonly fields: stc_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stc_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stc_statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    a0_task<T extends stc_status$a0_taskArgs<ExtArgs> = {}>(args?: Subset<T, stc_status$a0_taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the stc_status model
   */
  interface stc_statusFieldRefs {
    readonly app_status: FieldRef<"stc_status", 'String'>
    readonly created_date: FieldRef<"stc_status", 'DateTime'>
    readonly updated_date: FieldRef<"stc_status", 'DateTime'>
    readonly update_reason: FieldRef<"stc_status", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stc_status findUnique
   */
  export type stc_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_status
     */
    select?: stc_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_status
     */
    omit?: stc_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_statusInclude<ExtArgs> | null
    /**
     * Filter, which stc_status to fetch.
     */
    where: stc_statusWhereUniqueInput
  }

  /**
   * stc_status findUniqueOrThrow
   */
  export type stc_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_status
     */
    select?: stc_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_status
     */
    omit?: stc_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_statusInclude<ExtArgs> | null
    /**
     * Filter, which stc_status to fetch.
     */
    where: stc_statusWhereUniqueInput
  }

  /**
   * stc_status findFirst
   */
  export type stc_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_status
     */
    select?: stc_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_status
     */
    omit?: stc_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_statusInclude<ExtArgs> | null
    /**
     * Filter, which stc_status to fetch.
     */
    where?: stc_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stc_statuses to fetch.
     */
    orderBy?: stc_statusOrderByWithRelationInput | stc_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stc_statuses.
     */
    cursor?: stc_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stc_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stc_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stc_statuses.
     */
    distinct?: Stc_statusScalarFieldEnum | Stc_statusScalarFieldEnum[]
  }

  /**
   * stc_status findFirstOrThrow
   */
  export type stc_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_status
     */
    select?: stc_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_status
     */
    omit?: stc_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_statusInclude<ExtArgs> | null
    /**
     * Filter, which stc_status to fetch.
     */
    where?: stc_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stc_statuses to fetch.
     */
    orderBy?: stc_statusOrderByWithRelationInput | stc_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stc_statuses.
     */
    cursor?: stc_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stc_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stc_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stc_statuses.
     */
    distinct?: Stc_statusScalarFieldEnum | Stc_statusScalarFieldEnum[]
  }

  /**
   * stc_status findMany
   */
  export type stc_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_status
     */
    select?: stc_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_status
     */
    omit?: stc_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_statusInclude<ExtArgs> | null
    /**
     * Filter, which stc_statuses to fetch.
     */
    where?: stc_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stc_statuses to fetch.
     */
    orderBy?: stc_statusOrderByWithRelationInput | stc_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stc_statuses.
     */
    cursor?: stc_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stc_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stc_statuses.
     */
    skip?: number
    distinct?: Stc_statusScalarFieldEnum | Stc_statusScalarFieldEnum[]
  }

  /**
   * stc_status create
   */
  export type stc_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_status
     */
    select?: stc_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_status
     */
    omit?: stc_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_statusInclude<ExtArgs> | null
    /**
     * The data needed to create a stc_status.
     */
    data: XOR<stc_statusCreateInput, stc_statusUncheckedCreateInput>
  }

  /**
   * stc_status createMany
   */
  export type stc_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stc_statuses.
     */
    data: stc_statusCreateManyInput | stc_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stc_status createManyAndReturn
   */
  export type stc_statusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_status
     */
    select?: stc_statusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stc_status
     */
    omit?: stc_statusOmit<ExtArgs> | null
    /**
     * The data used to create many stc_statuses.
     */
    data: stc_statusCreateManyInput | stc_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stc_status update
   */
  export type stc_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_status
     */
    select?: stc_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_status
     */
    omit?: stc_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_statusInclude<ExtArgs> | null
    /**
     * The data needed to update a stc_status.
     */
    data: XOR<stc_statusUpdateInput, stc_statusUncheckedUpdateInput>
    /**
     * Choose, which stc_status to update.
     */
    where: stc_statusWhereUniqueInput
  }

  /**
   * stc_status updateMany
   */
  export type stc_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stc_statuses.
     */
    data: XOR<stc_statusUpdateManyMutationInput, stc_statusUncheckedUpdateManyInput>
    /**
     * Filter which stc_statuses to update
     */
    where?: stc_statusWhereInput
    /**
     * Limit how many stc_statuses to update.
     */
    limit?: number
  }

  /**
   * stc_status updateManyAndReturn
   */
  export type stc_statusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_status
     */
    select?: stc_statusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stc_status
     */
    omit?: stc_statusOmit<ExtArgs> | null
    /**
     * The data used to update stc_statuses.
     */
    data: XOR<stc_statusUpdateManyMutationInput, stc_statusUncheckedUpdateManyInput>
    /**
     * Filter which stc_statuses to update
     */
    where?: stc_statusWhereInput
    /**
     * Limit how many stc_statuses to update.
     */
    limit?: number
  }

  /**
   * stc_status upsert
   */
  export type stc_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_status
     */
    select?: stc_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_status
     */
    omit?: stc_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_statusInclude<ExtArgs> | null
    /**
     * The filter to search for the stc_status to update in case it exists.
     */
    where: stc_statusWhereUniqueInput
    /**
     * In case the stc_status found by the `where` argument doesn't exist, create a new stc_status with this data.
     */
    create: XOR<stc_statusCreateInput, stc_statusUncheckedCreateInput>
    /**
     * In case the stc_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stc_statusUpdateInput, stc_statusUncheckedUpdateInput>
  }

  /**
   * stc_status delete
   */
  export type stc_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_status
     */
    select?: stc_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_status
     */
    omit?: stc_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_statusInclude<ExtArgs> | null
    /**
     * Filter which stc_status to delete.
     */
    where: stc_statusWhereUniqueInput
  }

  /**
   * stc_status deleteMany
   */
  export type stc_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stc_statuses to delete
     */
    where?: stc_statusWhereInput
    /**
     * Limit how many stc_statuses to delete.
     */
    limit?: number
  }

  /**
   * stc_status.a0_task
   */
  export type stc_status$a0_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the a0_task
     */
    select?: a0_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the a0_task
     */
    omit?: a0_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: a0_taskInclude<ExtArgs> | null
    where?: a0_taskWhereInput
    orderBy?: a0_taskOrderByWithRelationInput | a0_taskOrderByWithRelationInput[]
    cursor?: a0_taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: A0_taskScalarFieldEnum | A0_taskScalarFieldEnum[]
  }

  /**
   * stc_status without action
   */
  export type stc_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stc_status
     */
    select?: stc_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stc_status
     */
    omit?: stc_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stc_statusInclude<ExtArgs> | null
  }


  /**
   * Model z_task_history
   */

  export type AggregateZ_task_history = {
    _count: Z_task_historyCountAggregateOutputType | null
    _avg: Z_task_historyAvgAggregateOutputType | null
    _sum: Z_task_historySumAggregateOutputType | null
    _min: Z_task_historyMinAggregateOutputType | null
    _max: Z_task_historyMaxAggregateOutputType | null
  }

  export type Z_task_historyAvgAggregateOutputType = {
    history_id: number | null
    task_id: number | null
  }

  export type Z_task_historySumAggregateOutputType = {
    history_id: bigint | null
    task_id: bigint | null
  }

  export type Z_task_historyMinAggregateOutputType = {
    history_id: bigint | null
    task_id: bigint | null
    task_title: string | null
    task_description: string | null
    task_date: Date | null
    task_status: string | null
    task_priority: string | null
    task_category: string | null
    change_timestamp: Date | null
    operation_type: string | null
  }

  export type Z_task_historyMaxAggregateOutputType = {
    history_id: bigint | null
    task_id: bigint | null
    task_title: string | null
    task_description: string | null
    task_date: Date | null
    task_status: string | null
    task_priority: string | null
    task_category: string | null
    change_timestamp: Date | null
    operation_type: string | null
  }

  export type Z_task_historyCountAggregateOutputType = {
    history_id: number
    task_id: number
    task_title: number
    task_description: number
    task_date: number
    task_status: number
    task_priority: number
    task_category: number
    change_timestamp: number
    operation_type: number
    _all: number
  }


  export type Z_task_historyAvgAggregateInputType = {
    history_id?: true
    task_id?: true
  }

  export type Z_task_historySumAggregateInputType = {
    history_id?: true
    task_id?: true
  }

  export type Z_task_historyMinAggregateInputType = {
    history_id?: true
    task_id?: true
    task_title?: true
    task_description?: true
    task_date?: true
    task_status?: true
    task_priority?: true
    task_category?: true
    change_timestamp?: true
    operation_type?: true
  }

  export type Z_task_historyMaxAggregateInputType = {
    history_id?: true
    task_id?: true
    task_title?: true
    task_description?: true
    task_date?: true
    task_status?: true
    task_priority?: true
    task_category?: true
    change_timestamp?: true
    operation_type?: true
  }

  export type Z_task_historyCountAggregateInputType = {
    history_id?: true
    task_id?: true
    task_title?: true
    task_description?: true
    task_date?: true
    task_status?: true
    task_priority?: true
    task_category?: true
    change_timestamp?: true
    operation_type?: true
    _all?: true
  }

  export type Z_task_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which z_task_history to aggregate.
     */
    where?: z_task_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of z_task_histories to fetch.
     */
    orderBy?: z_task_historyOrderByWithRelationInput | z_task_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: z_task_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` z_task_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` z_task_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned z_task_histories
    **/
    _count?: true | Z_task_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Z_task_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Z_task_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Z_task_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Z_task_historyMaxAggregateInputType
  }

  export type GetZ_task_historyAggregateType<T extends Z_task_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateZ_task_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZ_task_history[P]>
      : GetScalarType<T[P], AggregateZ_task_history[P]>
  }




  export type z_task_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: z_task_historyWhereInput
    orderBy?: z_task_historyOrderByWithAggregationInput | z_task_historyOrderByWithAggregationInput[]
    by: Z_task_historyScalarFieldEnum[] | Z_task_historyScalarFieldEnum
    having?: z_task_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Z_task_historyCountAggregateInputType | true
    _avg?: Z_task_historyAvgAggregateInputType
    _sum?: Z_task_historySumAggregateInputType
    _min?: Z_task_historyMinAggregateInputType
    _max?: Z_task_historyMaxAggregateInputType
  }

  export type Z_task_historyGroupByOutputType = {
    history_id: bigint
    task_id: bigint
    task_title: string
    task_description: string
    task_date: Date | null
    task_status: string
    task_priority: string
    task_category: string
    change_timestamp: Date
    operation_type: string
    _count: Z_task_historyCountAggregateOutputType | null
    _avg: Z_task_historyAvgAggregateOutputType | null
    _sum: Z_task_historySumAggregateOutputType | null
    _min: Z_task_historyMinAggregateOutputType | null
    _max: Z_task_historyMaxAggregateOutputType | null
  }

  type GetZ_task_historyGroupByPayload<T extends z_task_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Z_task_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Z_task_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Z_task_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Z_task_historyGroupByOutputType[P]>
        }
      >
    >


  export type z_task_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    history_id?: boolean
    task_id?: boolean
    task_title?: boolean
    task_description?: boolean
    task_date?: boolean
    task_status?: boolean
    task_priority?: boolean
    task_category?: boolean
    change_timestamp?: boolean
    operation_type?: boolean
    a0_task?: boolean | a0_taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["z_task_history"]>

  export type z_task_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    history_id?: boolean
    task_id?: boolean
    task_title?: boolean
    task_description?: boolean
    task_date?: boolean
    task_status?: boolean
    task_priority?: boolean
    task_category?: boolean
    change_timestamp?: boolean
    operation_type?: boolean
    a0_task?: boolean | a0_taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["z_task_history"]>

  export type z_task_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    history_id?: boolean
    task_id?: boolean
    task_title?: boolean
    task_description?: boolean
    task_date?: boolean
    task_status?: boolean
    task_priority?: boolean
    task_category?: boolean
    change_timestamp?: boolean
    operation_type?: boolean
    a0_task?: boolean | a0_taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["z_task_history"]>

  export type z_task_historySelectScalar = {
    history_id?: boolean
    task_id?: boolean
    task_title?: boolean
    task_description?: boolean
    task_date?: boolean
    task_status?: boolean
    task_priority?: boolean
    task_category?: boolean
    change_timestamp?: boolean
    operation_type?: boolean
  }

  export type z_task_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"history_id" | "task_id" | "task_title" | "task_description" | "task_date" | "task_status" | "task_priority" | "task_category" | "change_timestamp" | "operation_type", ExtArgs["result"]["z_task_history"]>
  export type z_task_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    a0_task?: boolean | a0_taskDefaultArgs<ExtArgs>
  }
  export type z_task_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    a0_task?: boolean | a0_taskDefaultArgs<ExtArgs>
  }
  export type z_task_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    a0_task?: boolean | a0_taskDefaultArgs<ExtArgs>
  }

  export type $z_task_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "z_task_history"
    objects: {
      a0_task: Prisma.$a0_taskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      history_id: bigint
      task_id: bigint
      task_title: string
      task_description: string
      task_date: Date | null
      task_status: string
      task_priority: string
      task_category: string
      change_timestamp: Date
      operation_type: string
    }, ExtArgs["result"]["z_task_history"]>
    composites: {}
  }

  type z_task_historyGetPayload<S extends boolean | null | undefined | z_task_historyDefaultArgs> = $Result.GetResult<Prisma.$z_task_historyPayload, S>

  type z_task_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<z_task_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Z_task_historyCountAggregateInputType | true
    }

  export interface z_task_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['z_task_history'], meta: { name: 'z_task_history' } }
    /**
     * Find zero or one Z_task_history that matches the filter.
     * @param {z_task_historyFindUniqueArgs} args - Arguments to find a Z_task_history
     * @example
     * // Get one Z_task_history
     * const z_task_history = await prisma.z_task_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends z_task_historyFindUniqueArgs>(args: SelectSubset<T, z_task_historyFindUniqueArgs<ExtArgs>>): Prisma__z_task_historyClient<$Result.GetResult<Prisma.$z_task_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Z_task_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {z_task_historyFindUniqueOrThrowArgs} args - Arguments to find a Z_task_history
     * @example
     * // Get one Z_task_history
     * const z_task_history = await prisma.z_task_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends z_task_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, z_task_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__z_task_historyClient<$Result.GetResult<Prisma.$z_task_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Z_task_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {z_task_historyFindFirstArgs} args - Arguments to find a Z_task_history
     * @example
     * // Get one Z_task_history
     * const z_task_history = await prisma.z_task_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends z_task_historyFindFirstArgs>(args?: SelectSubset<T, z_task_historyFindFirstArgs<ExtArgs>>): Prisma__z_task_historyClient<$Result.GetResult<Prisma.$z_task_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Z_task_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {z_task_historyFindFirstOrThrowArgs} args - Arguments to find a Z_task_history
     * @example
     * // Get one Z_task_history
     * const z_task_history = await prisma.z_task_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends z_task_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, z_task_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__z_task_historyClient<$Result.GetResult<Prisma.$z_task_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Z_task_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {z_task_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Z_task_histories
     * const z_task_histories = await prisma.z_task_history.findMany()
     * 
     * // Get first 10 Z_task_histories
     * const z_task_histories = await prisma.z_task_history.findMany({ take: 10 })
     * 
     * // Only select the `history_id`
     * const z_task_historyWithHistory_idOnly = await prisma.z_task_history.findMany({ select: { history_id: true } })
     * 
     */
    findMany<T extends z_task_historyFindManyArgs>(args?: SelectSubset<T, z_task_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$z_task_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Z_task_history.
     * @param {z_task_historyCreateArgs} args - Arguments to create a Z_task_history.
     * @example
     * // Create one Z_task_history
     * const Z_task_history = await prisma.z_task_history.create({
     *   data: {
     *     // ... data to create a Z_task_history
     *   }
     * })
     * 
     */
    create<T extends z_task_historyCreateArgs>(args: SelectSubset<T, z_task_historyCreateArgs<ExtArgs>>): Prisma__z_task_historyClient<$Result.GetResult<Prisma.$z_task_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Z_task_histories.
     * @param {z_task_historyCreateManyArgs} args - Arguments to create many Z_task_histories.
     * @example
     * // Create many Z_task_histories
     * const z_task_history = await prisma.z_task_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends z_task_historyCreateManyArgs>(args?: SelectSubset<T, z_task_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Z_task_histories and returns the data saved in the database.
     * @param {z_task_historyCreateManyAndReturnArgs} args - Arguments to create many Z_task_histories.
     * @example
     * // Create many Z_task_histories
     * const z_task_history = await prisma.z_task_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Z_task_histories and only return the `history_id`
     * const z_task_historyWithHistory_idOnly = await prisma.z_task_history.createManyAndReturn({
     *   select: { history_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends z_task_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, z_task_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$z_task_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Z_task_history.
     * @param {z_task_historyDeleteArgs} args - Arguments to delete one Z_task_history.
     * @example
     * // Delete one Z_task_history
     * const Z_task_history = await prisma.z_task_history.delete({
     *   where: {
     *     // ... filter to delete one Z_task_history
     *   }
     * })
     * 
     */
    delete<T extends z_task_historyDeleteArgs>(args: SelectSubset<T, z_task_historyDeleteArgs<ExtArgs>>): Prisma__z_task_historyClient<$Result.GetResult<Prisma.$z_task_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Z_task_history.
     * @param {z_task_historyUpdateArgs} args - Arguments to update one Z_task_history.
     * @example
     * // Update one Z_task_history
     * const z_task_history = await prisma.z_task_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends z_task_historyUpdateArgs>(args: SelectSubset<T, z_task_historyUpdateArgs<ExtArgs>>): Prisma__z_task_historyClient<$Result.GetResult<Prisma.$z_task_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Z_task_histories.
     * @param {z_task_historyDeleteManyArgs} args - Arguments to filter Z_task_histories to delete.
     * @example
     * // Delete a few Z_task_histories
     * const { count } = await prisma.z_task_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends z_task_historyDeleteManyArgs>(args?: SelectSubset<T, z_task_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Z_task_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {z_task_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Z_task_histories
     * const z_task_history = await prisma.z_task_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends z_task_historyUpdateManyArgs>(args: SelectSubset<T, z_task_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Z_task_histories and returns the data updated in the database.
     * @param {z_task_historyUpdateManyAndReturnArgs} args - Arguments to update many Z_task_histories.
     * @example
     * // Update many Z_task_histories
     * const z_task_history = await prisma.z_task_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Z_task_histories and only return the `history_id`
     * const z_task_historyWithHistory_idOnly = await prisma.z_task_history.updateManyAndReturn({
     *   select: { history_id: true },
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
    updateManyAndReturn<T extends z_task_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, z_task_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$z_task_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Z_task_history.
     * @param {z_task_historyUpsertArgs} args - Arguments to update or create a Z_task_history.
     * @example
     * // Update or create a Z_task_history
     * const z_task_history = await prisma.z_task_history.upsert({
     *   create: {
     *     // ... data to create a Z_task_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Z_task_history we want to update
     *   }
     * })
     */
    upsert<T extends z_task_historyUpsertArgs>(args: SelectSubset<T, z_task_historyUpsertArgs<ExtArgs>>): Prisma__z_task_historyClient<$Result.GetResult<Prisma.$z_task_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Z_task_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {z_task_historyCountArgs} args - Arguments to filter Z_task_histories to count.
     * @example
     * // Count the number of Z_task_histories
     * const count = await prisma.z_task_history.count({
     *   where: {
     *     // ... the filter for the Z_task_histories we want to count
     *   }
     * })
    **/
    count<T extends z_task_historyCountArgs>(
      args?: Subset<T, z_task_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Z_task_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Z_task_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Z_task_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Z_task_historyAggregateArgs>(args: Subset<T, Z_task_historyAggregateArgs>): Prisma.PrismaPromise<GetZ_task_historyAggregateType<T>>

    /**
     * Group by Z_task_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {z_task_historyGroupByArgs} args - Group by arguments.
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
      T extends z_task_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: z_task_historyGroupByArgs['orderBy'] }
        : { orderBy?: z_task_historyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, z_task_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZ_task_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the z_task_history model
   */
  readonly fields: z_task_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for z_task_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__z_task_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    a0_task<T extends a0_taskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, a0_taskDefaultArgs<ExtArgs>>): Prisma__a0_taskClient<$Result.GetResult<Prisma.$a0_taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the z_task_history model
   */
  interface z_task_historyFieldRefs {
    readonly history_id: FieldRef<"z_task_history", 'BigInt'>
    readonly task_id: FieldRef<"z_task_history", 'BigInt'>
    readonly task_title: FieldRef<"z_task_history", 'String'>
    readonly task_description: FieldRef<"z_task_history", 'String'>
    readonly task_date: FieldRef<"z_task_history", 'DateTime'>
    readonly task_status: FieldRef<"z_task_history", 'String'>
    readonly task_priority: FieldRef<"z_task_history", 'String'>
    readonly task_category: FieldRef<"z_task_history", 'String'>
    readonly change_timestamp: FieldRef<"z_task_history", 'DateTime'>
    readonly operation_type: FieldRef<"z_task_history", 'String'>
  }
    

  // Custom InputTypes
  /**
   * z_task_history findUnique
   */
  export type z_task_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyInclude<ExtArgs> | null
    /**
     * Filter, which z_task_history to fetch.
     */
    where: z_task_historyWhereUniqueInput
  }

  /**
   * z_task_history findUniqueOrThrow
   */
  export type z_task_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyInclude<ExtArgs> | null
    /**
     * Filter, which z_task_history to fetch.
     */
    where: z_task_historyWhereUniqueInput
  }

  /**
   * z_task_history findFirst
   */
  export type z_task_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyInclude<ExtArgs> | null
    /**
     * Filter, which z_task_history to fetch.
     */
    where?: z_task_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of z_task_histories to fetch.
     */
    orderBy?: z_task_historyOrderByWithRelationInput | z_task_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for z_task_histories.
     */
    cursor?: z_task_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` z_task_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` z_task_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of z_task_histories.
     */
    distinct?: Z_task_historyScalarFieldEnum | Z_task_historyScalarFieldEnum[]
  }

  /**
   * z_task_history findFirstOrThrow
   */
  export type z_task_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyInclude<ExtArgs> | null
    /**
     * Filter, which z_task_history to fetch.
     */
    where?: z_task_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of z_task_histories to fetch.
     */
    orderBy?: z_task_historyOrderByWithRelationInput | z_task_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for z_task_histories.
     */
    cursor?: z_task_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` z_task_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` z_task_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of z_task_histories.
     */
    distinct?: Z_task_historyScalarFieldEnum | Z_task_historyScalarFieldEnum[]
  }

  /**
   * z_task_history findMany
   */
  export type z_task_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyInclude<ExtArgs> | null
    /**
     * Filter, which z_task_histories to fetch.
     */
    where?: z_task_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of z_task_histories to fetch.
     */
    orderBy?: z_task_historyOrderByWithRelationInput | z_task_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing z_task_histories.
     */
    cursor?: z_task_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` z_task_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` z_task_histories.
     */
    skip?: number
    distinct?: Z_task_historyScalarFieldEnum | Z_task_historyScalarFieldEnum[]
  }

  /**
   * z_task_history create
   */
  export type z_task_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a z_task_history.
     */
    data: XOR<z_task_historyCreateInput, z_task_historyUncheckedCreateInput>
  }

  /**
   * z_task_history createMany
   */
  export type z_task_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many z_task_histories.
     */
    data: z_task_historyCreateManyInput | z_task_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * z_task_history createManyAndReturn
   */
  export type z_task_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * The data used to create many z_task_histories.
     */
    data: z_task_historyCreateManyInput | z_task_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * z_task_history update
   */
  export type z_task_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a z_task_history.
     */
    data: XOR<z_task_historyUpdateInput, z_task_historyUncheckedUpdateInput>
    /**
     * Choose, which z_task_history to update.
     */
    where: z_task_historyWhereUniqueInput
  }

  /**
   * z_task_history updateMany
   */
  export type z_task_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update z_task_histories.
     */
    data: XOR<z_task_historyUpdateManyMutationInput, z_task_historyUncheckedUpdateManyInput>
    /**
     * Filter which z_task_histories to update
     */
    where?: z_task_historyWhereInput
    /**
     * Limit how many z_task_histories to update.
     */
    limit?: number
  }

  /**
   * z_task_history updateManyAndReturn
   */
  export type z_task_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * The data used to update z_task_histories.
     */
    data: XOR<z_task_historyUpdateManyMutationInput, z_task_historyUncheckedUpdateManyInput>
    /**
     * Filter which z_task_histories to update
     */
    where?: z_task_historyWhereInput
    /**
     * Limit how many z_task_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * z_task_history upsert
   */
  export type z_task_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the z_task_history to update in case it exists.
     */
    where: z_task_historyWhereUniqueInput
    /**
     * In case the z_task_history found by the `where` argument doesn't exist, create a new z_task_history with this data.
     */
    create: XOR<z_task_historyCreateInput, z_task_historyUncheckedCreateInput>
    /**
     * In case the z_task_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<z_task_historyUpdateInput, z_task_historyUncheckedUpdateInput>
  }

  /**
   * z_task_history delete
   */
  export type z_task_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyInclude<ExtArgs> | null
    /**
     * Filter which z_task_history to delete.
     */
    where: z_task_historyWhereUniqueInput
  }

  /**
   * z_task_history deleteMany
   */
  export type z_task_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which z_task_histories to delete
     */
    where?: z_task_historyWhereInput
    /**
     * Limit how many z_task_histories to delete.
     */
    limit?: number
  }

  /**
   * z_task_history without action
   */
  export type z_task_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the z_task_history
     */
    select?: z_task_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the z_task_history
     */
    omit?: z_task_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: z_task_historyInclude<ExtArgs> | null
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


  export const A0_taskScalarFieldEnum: {
    task_id: 'task_id',
    task_title: 'task_title',
    task_description: 'task_description',
    task_date: 'task_date',
    task_status: 'task_status',
    task_priority: 'task_priority',
    task_category: 'task_category',
    created_date: 'created_date',
    updated_date: 'updated_date'
  };

  export type A0_taskScalarFieldEnum = (typeof A0_taskScalarFieldEnum)[keyof typeof A0_taskScalarFieldEnum]


  export const B1_commentScalarFieldEnum: {
    comment_id: 'comment_id',
    task_id: 'task_id',
    comment_text: 'comment_text',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type B1_commentScalarFieldEnum = (typeof B1_commentScalarFieldEnum)[keyof typeof B1_commentScalarFieldEnum]


  export const Stc_categoryScalarFieldEnum: {
    category_name: 'category_name',
    created_date: 'created_date',
    updated_date: 'updated_date',
    update_reason: 'update_reason'
  };

  export type Stc_categoryScalarFieldEnum = (typeof Stc_categoryScalarFieldEnum)[keyof typeof Stc_categoryScalarFieldEnum]


  export const Stc_priorityScalarFieldEnum: {
    app_priority: 'app_priority',
    created_date: 'created_date',
    updated_date: 'updated_date',
    update_reason: 'update_reason'
  };

  export type Stc_priorityScalarFieldEnum = (typeof Stc_priorityScalarFieldEnum)[keyof typeof Stc_priorityScalarFieldEnum]


  export const Stc_statusScalarFieldEnum: {
    app_status: 'app_status',
    created_date: 'created_date',
    updated_date: 'updated_date',
    update_reason: 'update_reason'
  };

  export type Stc_statusScalarFieldEnum = (typeof Stc_statusScalarFieldEnum)[keyof typeof Stc_statusScalarFieldEnum]


  export const Z_task_historyScalarFieldEnum: {
    history_id: 'history_id',
    task_id: 'task_id',
    task_title: 'task_title',
    task_description: 'task_description',
    task_date: 'task_date',
    task_status: 'task_status',
    task_priority: 'task_priority',
    task_category: 'task_category',
    change_timestamp: 'change_timestamp',
    operation_type: 'operation_type'
  };

  export type Z_task_historyScalarFieldEnum = (typeof Z_task_historyScalarFieldEnum)[keyof typeof Z_task_historyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type a0_taskWhereInput = {
    AND?: a0_taskWhereInput | a0_taskWhereInput[]
    OR?: a0_taskWhereInput[]
    NOT?: a0_taskWhereInput | a0_taskWhereInput[]
    task_id?: BigIntFilter<"a0_task"> | bigint | number
    task_title?: StringFilter<"a0_task"> | string
    task_description?: StringFilter<"a0_task"> | string
    task_date?: DateTimeNullableFilter<"a0_task"> | Date | string | null
    task_status?: StringFilter<"a0_task"> | string
    task_priority?: StringFilter<"a0_task"> | string
    task_category?: StringFilter<"a0_task"> | string
    created_date?: DateTimeFilter<"a0_task"> | Date | string
    updated_date?: DateTimeNullableFilter<"a0_task"> | Date | string | null
    stc_category?: XOR<Stc_categoryScalarRelationFilter, stc_categoryWhereInput>
    stc_priority?: XOR<Stc_priorityScalarRelationFilter, stc_priorityWhereInput>
    stc_status?: XOR<Stc_statusScalarRelationFilter, stc_statusWhereInput>
    b1_comment?: B1_commentListRelationFilter
    z_task_history?: Z_task_historyListRelationFilter
  }

  export type a0_taskOrderByWithRelationInput = {
    task_id?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
    task_date?: SortOrderInput | SortOrder
    task_status?: SortOrder
    task_priority?: SortOrder
    task_category?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrderInput | SortOrder
    stc_category?: stc_categoryOrderByWithRelationInput
    stc_priority?: stc_priorityOrderByWithRelationInput
    stc_status?: stc_statusOrderByWithRelationInput
    b1_comment?: b1_commentOrderByRelationAggregateInput
    z_task_history?: z_task_historyOrderByRelationAggregateInput
  }

  export type a0_taskWhereUniqueInput = Prisma.AtLeast<{
    task_id?: bigint | number
    AND?: a0_taskWhereInput | a0_taskWhereInput[]
    OR?: a0_taskWhereInput[]
    NOT?: a0_taskWhereInput | a0_taskWhereInput[]
    task_title?: StringFilter<"a0_task"> | string
    task_description?: StringFilter<"a0_task"> | string
    task_date?: DateTimeNullableFilter<"a0_task"> | Date | string | null
    task_status?: StringFilter<"a0_task"> | string
    task_priority?: StringFilter<"a0_task"> | string
    task_category?: StringFilter<"a0_task"> | string
    created_date?: DateTimeFilter<"a0_task"> | Date | string
    updated_date?: DateTimeNullableFilter<"a0_task"> | Date | string | null
    stc_category?: XOR<Stc_categoryScalarRelationFilter, stc_categoryWhereInput>
    stc_priority?: XOR<Stc_priorityScalarRelationFilter, stc_priorityWhereInput>
    stc_status?: XOR<Stc_statusScalarRelationFilter, stc_statusWhereInput>
    b1_comment?: B1_commentListRelationFilter
    z_task_history?: Z_task_historyListRelationFilter
  }, "task_id">

  export type a0_taskOrderByWithAggregationInput = {
    task_id?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
    task_date?: SortOrderInput | SortOrder
    task_status?: SortOrder
    task_priority?: SortOrder
    task_category?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrderInput | SortOrder
    _count?: a0_taskCountOrderByAggregateInput
    _avg?: a0_taskAvgOrderByAggregateInput
    _max?: a0_taskMaxOrderByAggregateInput
    _min?: a0_taskMinOrderByAggregateInput
    _sum?: a0_taskSumOrderByAggregateInput
  }

  export type a0_taskScalarWhereWithAggregatesInput = {
    AND?: a0_taskScalarWhereWithAggregatesInput | a0_taskScalarWhereWithAggregatesInput[]
    OR?: a0_taskScalarWhereWithAggregatesInput[]
    NOT?: a0_taskScalarWhereWithAggregatesInput | a0_taskScalarWhereWithAggregatesInput[]
    task_id?: BigIntWithAggregatesFilter<"a0_task"> | bigint | number
    task_title?: StringWithAggregatesFilter<"a0_task"> | string
    task_description?: StringWithAggregatesFilter<"a0_task"> | string
    task_date?: DateTimeNullableWithAggregatesFilter<"a0_task"> | Date | string | null
    task_status?: StringWithAggregatesFilter<"a0_task"> | string
    task_priority?: StringWithAggregatesFilter<"a0_task"> | string
    task_category?: StringWithAggregatesFilter<"a0_task"> | string
    created_date?: DateTimeWithAggregatesFilter<"a0_task"> | Date | string
    updated_date?: DateTimeNullableWithAggregatesFilter<"a0_task"> | Date | string | null
  }

  export type b1_commentWhereInput = {
    AND?: b1_commentWhereInput | b1_commentWhereInput[]
    OR?: b1_commentWhereInput[]
    NOT?: b1_commentWhereInput | b1_commentWhereInput[]
    comment_id?: BigIntFilter<"b1_comment"> | bigint | number
    task_id?: BigIntFilter<"b1_comment"> | bigint | number
    comment_text?: StringFilter<"b1_comment"> | string
    created_at?: DateTimeFilter<"b1_comment"> | Date | string
    updated_at?: DateTimeNullableFilter<"b1_comment"> | Date | string | null
    a0_task?: XOR<A0_taskScalarRelationFilter, a0_taskWhereInput>
  }

  export type b1_commentOrderByWithRelationInput = {
    comment_id?: SortOrder
    task_id?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    a0_task?: a0_taskOrderByWithRelationInput
  }

  export type b1_commentWhereUniqueInput = Prisma.AtLeast<{
    comment_id?: bigint | number
    AND?: b1_commentWhereInput | b1_commentWhereInput[]
    OR?: b1_commentWhereInput[]
    NOT?: b1_commentWhereInput | b1_commentWhereInput[]
    task_id?: BigIntFilter<"b1_comment"> | bigint | number
    comment_text?: StringFilter<"b1_comment"> | string
    created_at?: DateTimeFilter<"b1_comment"> | Date | string
    updated_at?: DateTimeNullableFilter<"b1_comment"> | Date | string | null
    a0_task?: XOR<A0_taskScalarRelationFilter, a0_taskWhereInput>
  }, "comment_id">

  export type b1_commentOrderByWithAggregationInput = {
    comment_id?: SortOrder
    task_id?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: b1_commentCountOrderByAggregateInput
    _avg?: b1_commentAvgOrderByAggregateInput
    _max?: b1_commentMaxOrderByAggregateInput
    _min?: b1_commentMinOrderByAggregateInput
    _sum?: b1_commentSumOrderByAggregateInput
  }

  export type b1_commentScalarWhereWithAggregatesInput = {
    AND?: b1_commentScalarWhereWithAggregatesInput | b1_commentScalarWhereWithAggregatesInput[]
    OR?: b1_commentScalarWhereWithAggregatesInput[]
    NOT?: b1_commentScalarWhereWithAggregatesInput | b1_commentScalarWhereWithAggregatesInput[]
    comment_id?: BigIntWithAggregatesFilter<"b1_comment"> | bigint | number
    task_id?: BigIntWithAggregatesFilter<"b1_comment"> | bigint | number
    comment_text?: StringWithAggregatesFilter<"b1_comment"> | string
    created_at?: DateTimeWithAggregatesFilter<"b1_comment"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"b1_comment"> | Date | string | null
  }

  export type stc_categoryWhereInput = {
    AND?: stc_categoryWhereInput | stc_categoryWhereInput[]
    OR?: stc_categoryWhereInput[]
    NOT?: stc_categoryWhereInput | stc_categoryWhereInput[]
    category_name?: StringFilter<"stc_category"> | string
    created_date?: DateTimeFilter<"stc_category"> | Date | string
    updated_date?: DateTimeNullableFilter<"stc_category"> | Date | string | null
    update_reason?: StringNullableFilter<"stc_category"> | string | null
    a0_task?: A0_taskListRelationFilter
  }

  export type stc_categoryOrderByWithRelationInput = {
    category_name?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrderInput | SortOrder
    update_reason?: SortOrderInput | SortOrder
    a0_task?: a0_taskOrderByRelationAggregateInput
  }

  export type stc_categoryWhereUniqueInput = Prisma.AtLeast<{
    category_name?: string
    AND?: stc_categoryWhereInput | stc_categoryWhereInput[]
    OR?: stc_categoryWhereInput[]
    NOT?: stc_categoryWhereInput | stc_categoryWhereInput[]
    created_date?: DateTimeFilter<"stc_category"> | Date | string
    updated_date?: DateTimeNullableFilter<"stc_category"> | Date | string | null
    update_reason?: StringNullableFilter<"stc_category"> | string | null
    a0_task?: A0_taskListRelationFilter
  }, "category_name">

  export type stc_categoryOrderByWithAggregationInput = {
    category_name?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrderInput | SortOrder
    update_reason?: SortOrderInput | SortOrder
    _count?: stc_categoryCountOrderByAggregateInput
    _max?: stc_categoryMaxOrderByAggregateInput
    _min?: stc_categoryMinOrderByAggregateInput
  }

  export type stc_categoryScalarWhereWithAggregatesInput = {
    AND?: stc_categoryScalarWhereWithAggregatesInput | stc_categoryScalarWhereWithAggregatesInput[]
    OR?: stc_categoryScalarWhereWithAggregatesInput[]
    NOT?: stc_categoryScalarWhereWithAggregatesInput | stc_categoryScalarWhereWithAggregatesInput[]
    category_name?: StringWithAggregatesFilter<"stc_category"> | string
    created_date?: DateTimeWithAggregatesFilter<"stc_category"> | Date | string
    updated_date?: DateTimeNullableWithAggregatesFilter<"stc_category"> | Date | string | null
    update_reason?: StringNullableWithAggregatesFilter<"stc_category"> | string | null
  }

  export type stc_priorityWhereInput = {
    AND?: stc_priorityWhereInput | stc_priorityWhereInput[]
    OR?: stc_priorityWhereInput[]
    NOT?: stc_priorityWhereInput | stc_priorityWhereInput[]
    app_priority?: StringFilter<"stc_priority"> | string
    created_date?: DateTimeFilter<"stc_priority"> | Date | string
    updated_date?: DateTimeNullableFilter<"stc_priority"> | Date | string | null
    update_reason?: StringNullableFilter<"stc_priority"> | string | null
    a0_task?: A0_taskListRelationFilter
  }

  export type stc_priorityOrderByWithRelationInput = {
    app_priority?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrderInput | SortOrder
    update_reason?: SortOrderInput | SortOrder
    a0_task?: a0_taskOrderByRelationAggregateInput
  }

  export type stc_priorityWhereUniqueInput = Prisma.AtLeast<{
    app_priority?: string
    AND?: stc_priorityWhereInput | stc_priorityWhereInput[]
    OR?: stc_priorityWhereInput[]
    NOT?: stc_priorityWhereInput | stc_priorityWhereInput[]
    created_date?: DateTimeFilter<"stc_priority"> | Date | string
    updated_date?: DateTimeNullableFilter<"stc_priority"> | Date | string | null
    update_reason?: StringNullableFilter<"stc_priority"> | string | null
    a0_task?: A0_taskListRelationFilter
  }, "app_priority">

  export type stc_priorityOrderByWithAggregationInput = {
    app_priority?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrderInput | SortOrder
    update_reason?: SortOrderInput | SortOrder
    _count?: stc_priorityCountOrderByAggregateInput
    _max?: stc_priorityMaxOrderByAggregateInput
    _min?: stc_priorityMinOrderByAggregateInput
  }

  export type stc_priorityScalarWhereWithAggregatesInput = {
    AND?: stc_priorityScalarWhereWithAggregatesInput | stc_priorityScalarWhereWithAggregatesInput[]
    OR?: stc_priorityScalarWhereWithAggregatesInput[]
    NOT?: stc_priorityScalarWhereWithAggregatesInput | stc_priorityScalarWhereWithAggregatesInput[]
    app_priority?: StringWithAggregatesFilter<"stc_priority"> | string
    created_date?: DateTimeWithAggregatesFilter<"stc_priority"> | Date | string
    updated_date?: DateTimeNullableWithAggregatesFilter<"stc_priority"> | Date | string | null
    update_reason?: StringNullableWithAggregatesFilter<"stc_priority"> | string | null
  }

  export type stc_statusWhereInput = {
    AND?: stc_statusWhereInput | stc_statusWhereInput[]
    OR?: stc_statusWhereInput[]
    NOT?: stc_statusWhereInput | stc_statusWhereInput[]
    app_status?: StringFilter<"stc_status"> | string
    created_date?: DateTimeFilter<"stc_status"> | Date | string
    updated_date?: DateTimeNullableFilter<"stc_status"> | Date | string | null
    update_reason?: StringNullableFilter<"stc_status"> | string | null
    a0_task?: A0_taskListRelationFilter
  }

  export type stc_statusOrderByWithRelationInput = {
    app_status?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrderInput | SortOrder
    update_reason?: SortOrderInput | SortOrder
    a0_task?: a0_taskOrderByRelationAggregateInput
  }

  export type stc_statusWhereUniqueInput = Prisma.AtLeast<{
    app_status?: string
    AND?: stc_statusWhereInput | stc_statusWhereInput[]
    OR?: stc_statusWhereInput[]
    NOT?: stc_statusWhereInput | stc_statusWhereInput[]
    created_date?: DateTimeFilter<"stc_status"> | Date | string
    updated_date?: DateTimeNullableFilter<"stc_status"> | Date | string | null
    update_reason?: StringNullableFilter<"stc_status"> | string | null
    a0_task?: A0_taskListRelationFilter
  }, "app_status">

  export type stc_statusOrderByWithAggregationInput = {
    app_status?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrderInput | SortOrder
    update_reason?: SortOrderInput | SortOrder
    _count?: stc_statusCountOrderByAggregateInput
    _max?: stc_statusMaxOrderByAggregateInput
    _min?: stc_statusMinOrderByAggregateInput
  }

  export type stc_statusScalarWhereWithAggregatesInput = {
    AND?: stc_statusScalarWhereWithAggregatesInput | stc_statusScalarWhereWithAggregatesInput[]
    OR?: stc_statusScalarWhereWithAggregatesInput[]
    NOT?: stc_statusScalarWhereWithAggregatesInput | stc_statusScalarWhereWithAggregatesInput[]
    app_status?: StringWithAggregatesFilter<"stc_status"> | string
    created_date?: DateTimeWithAggregatesFilter<"stc_status"> | Date | string
    updated_date?: DateTimeNullableWithAggregatesFilter<"stc_status"> | Date | string | null
    update_reason?: StringNullableWithAggregatesFilter<"stc_status"> | string | null
  }

  export type z_task_historyWhereInput = {
    AND?: z_task_historyWhereInput | z_task_historyWhereInput[]
    OR?: z_task_historyWhereInput[]
    NOT?: z_task_historyWhereInput | z_task_historyWhereInput[]
    history_id?: BigIntFilter<"z_task_history"> | bigint | number
    task_id?: BigIntFilter<"z_task_history"> | bigint | number
    task_title?: StringFilter<"z_task_history"> | string
    task_description?: StringFilter<"z_task_history"> | string
    task_date?: DateTimeNullableFilter<"z_task_history"> | Date | string | null
    task_status?: StringFilter<"z_task_history"> | string
    task_priority?: StringFilter<"z_task_history"> | string
    task_category?: StringFilter<"z_task_history"> | string
    change_timestamp?: DateTimeFilter<"z_task_history"> | Date | string
    operation_type?: StringFilter<"z_task_history"> | string
    a0_task?: XOR<A0_taskScalarRelationFilter, a0_taskWhereInput>
  }

  export type z_task_historyOrderByWithRelationInput = {
    history_id?: SortOrder
    task_id?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
    task_date?: SortOrderInput | SortOrder
    task_status?: SortOrder
    task_priority?: SortOrder
    task_category?: SortOrder
    change_timestamp?: SortOrder
    operation_type?: SortOrder
    a0_task?: a0_taskOrderByWithRelationInput
  }

  export type z_task_historyWhereUniqueInput = Prisma.AtLeast<{
    history_id?: bigint | number
    AND?: z_task_historyWhereInput | z_task_historyWhereInput[]
    OR?: z_task_historyWhereInput[]
    NOT?: z_task_historyWhereInput | z_task_historyWhereInput[]
    task_id?: BigIntFilter<"z_task_history"> | bigint | number
    task_title?: StringFilter<"z_task_history"> | string
    task_description?: StringFilter<"z_task_history"> | string
    task_date?: DateTimeNullableFilter<"z_task_history"> | Date | string | null
    task_status?: StringFilter<"z_task_history"> | string
    task_priority?: StringFilter<"z_task_history"> | string
    task_category?: StringFilter<"z_task_history"> | string
    change_timestamp?: DateTimeFilter<"z_task_history"> | Date | string
    operation_type?: StringFilter<"z_task_history"> | string
    a0_task?: XOR<A0_taskScalarRelationFilter, a0_taskWhereInput>
  }, "history_id">

  export type z_task_historyOrderByWithAggregationInput = {
    history_id?: SortOrder
    task_id?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
    task_date?: SortOrderInput | SortOrder
    task_status?: SortOrder
    task_priority?: SortOrder
    task_category?: SortOrder
    change_timestamp?: SortOrder
    operation_type?: SortOrder
    _count?: z_task_historyCountOrderByAggregateInput
    _avg?: z_task_historyAvgOrderByAggregateInput
    _max?: z_task_historyMaxOrderByAggregateInput
    _min?: z_task_historyMinOrderByAggregateInput
    _sum?: z_task_historySumOrderByAggregateInput
  }

  export type z_task_historyScalarWhereWithAggregatesInput = {
    AND?: z_task_historyScalarWhereWithAggregatesInput | z_task_historyScalarWhereWithAggregatesInput[]
    OR?: z_task_historyScalarWhereWithAggregatesInput[]
    NOT?: z_task_historyScalarWhereWithAggregatesInput | z_task_historyScalarWhereWithAggregatesInput[]
    history_id?: BigIntWithAggregatesFilter<"z_task_history"> | bigint | number
    task_id?: BigIntWithAggregatesFilter<"z_task_history"> | bigint | number
    task_title?: StringWithAggregatesFilter<"z_task_history"> | string
    task_description?: StringWithAggregatesFilter<"z_task_history"> | string
    task_date?: DateTimeNullableWithAggregatesFilter<"z_task_history"> | Date | string | null
    task_status?: StringWithAggregatesFilter<"z_task_history"> | string
    task_priority?: StringWithAggregatesFilter<"z_task_history"> | string
    task_category?: StringWithAggregatesFilter<"z_task_history"> | string
    change_timestamp?: DateTimeWithAggregatesFilter<"z_task_history"> | Date | string
    operation_type?: StringWithAggregatesFilter<"z_task_history"> | string
  }

  export type a0_taskCreateInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    created_date?: Date | string
    updated_date?: Date | string | null
    stc_category: stc_categoryCreateNestedOneWithoutA0_taskInput
    stc_priority: stc_priorityCreateNestedOneWithoutA0_taskInput
    stc_status: stc_statusCreateNestedOneWithoutA0_taskInput
    b1_comment?: b1_commentCreateNestedManyWithoutA0_taskInput
    z_task_history?: z_task_historyCreateNestedManyWithoutA0_taskInput
  }

  export type a0_taskUncheckedCreateInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_priority: string
    task_category: string
    created_date?: Date | string
    updated_date?: Date | string | null
    b1_comment?: b1_commentUncheckedCreateNestedManyWithoutA0_taskInput
    z_task_history?: z_task_historyUncheckedCreateNestedManyWithoutA0_taskInput
  }

  export type a0_taskUpdateInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stc_category?: stc_categoryUpdateOneRequiredWithoutA0_taskNestedInput
    stc_priority?: stc_priorityUpdateOneRequiredWithoutA0_taskNestedInput
    stc_status?: stc_statusUpdateOneRequiredWithoutA0_taskNestedInput
    b1_comment?: b1_commentUpdateManyWithoutA0_taskNestedInput
    z_task_history?: z_task_historyUpdateManyWithoutA0_taskNestedInput
  }

  export type a0_taskUncheckedUpdateInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    b1_comment?: b1_commentUncheckedUpdateManyWithoutA0_taskNestedInput
    z_task_history?: z_task_historyUncheckedUpdateManyWithoutA0_taskNestedInput
  }

  export type a0_taskCreateManyInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_priority: string
    task_category: string
    created_date?: Date | string
    updated_date?: Date | string | null
  }

  export type a0_taskUpdateManyMutationInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type a0_taskUncheckedUpdateManyInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type b1_commentCreateInput = {
    comment_id?: bigint | number
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string | null
    a0_task: a0_taskCreateNestedOneWithoutB1_commentInput
  }

  export type b1_commentUncheckedCreateInput = {
    comment_id?: bigint | number
    task_id: bigint | number
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type b1_commentUpdateInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    a0_task?: a0_taskUpdateOneRequiredWithoutB1_commentNestedInput
  }

  export type b1_commentUncheckedUpdateInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type b1_commentCreateManyInput = {
    comment_id?: bigint | number
    task_id: bigint | number
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type b1_commentUpdateManyMutationInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type b1_commentUncheckedUpdateManyInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stc_categoryCreateInput = {
    category_name: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
    a0_task?: a0_taskCreateNestedManyWithoutStc_categoryInput
  }

  export type stc_categoryUncheckedCreateInput = {
    category_name: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
    a0_task?: a0_taskUncheckedCreateNestedManyWithoutStc_categoryInput
  }

  export type stc_categoryUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
    a0_task?: a0_taskUpdateManyWithoutStc_categoryNestedInput
  }

  export type stc_categoryUncheckedUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
    a0_task?: a0_taskUncheckedUpdateManyWithoutStc_categoryNestedInput
  }

  export type stc_categoryCreateManyInput = {
    category_name: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
  }

  export type stc_categoryUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stc_categoryUncheckedUpdateManyInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stc_priorityCreateInput = {
    app_priority: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
    a0_task?: a0_taskCreateNestedManyWithoutStc_priorityInput
  }

  export type stc_priorityUncheckedCreateInput = {
    app_priority: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
    a0_task?: a0_taskUncheckedCreateNestedManyWithoutStc_priorityInput
  }

  export type stc_priorityUpdateInput = {
    app_priority?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
    a0_task?: a0_taskUpdateManyWithoutStc_priorityNestedInput
  }

  export type stc_priorityUncheckedUpdateInput = {
    app_priority?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
    a0_task?: a0_taskUncheckedUpdateManyWithoutStc_priorityNestedInput
  }

  export type stc_priorityCreateManyInput = {
    app_priority: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
  }

  export type stc_priorityUpdateManyMutationInput = {
    app_priority?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stc_priorityUncheckedUpdateManyInput = {
    app_priority?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stc_statusCreateInput = {
    app_status: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
    a0_task?: a0_taskCreateNestedManyWithoutStc_statusInput
  }

  export type stc_statusUncheckedCreateInput = {
    app_status: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
    a0_task?: a0_taskUncheckedCreateNestedManyWithoutStc_statusInput
  }

  export type stc_statusUpdateInput = {
    app_status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
    a0_task?: a0_taskUpdateManyWithoutStc_statusNestedInput
  }

  export type stc_statusUncheckedUpdateInput = {
    app_status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
    a0_task?: a0_taskUncheckedUpdateManyWithoutStc_statusNestedInput
  }

  export type stc_statusCreateManyInput = {
    app_status: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
  }

  export type stc_statusUpdateManyMutationInput = {
    app_status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stc_statusUncheckedUpdateManyInput = {
    app_status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type z_task_historyCreateInput = {
    history_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_priority: string
    task_category: string
    change_timestamp?: Date | string
    operation_type: string
    a0_task: a0_taskCreateNestedOneWithoutZ_task_historyInput
  }

  export type z_task_historyUncheckedCreateInput = {
    history_id?: bigint | number
    task_id: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_priority: string
    task_category: string
    change_timestamp?: Date | string
    operation_type: string
  }

  export type z_task_historyUpdateInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    change_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    operation_type?: StringFieldUpdateOperationsInput | string
    a0_task?: a0_taskUpdateOneRequiredWithoutZ_task_historyNestedInput
  }

  export type z_task_historyUncheckedUpdateInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    change_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    operation_type?: StringFieldUpdateOperationsInput | string
  }

  export type z_task_historyCreateManyInput = {
    history_id?: bigint | number
    task_id: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_priority: string
    task_category: string
    change_timestamp?: Date | string
    operation_type: string
  }

  export type z_task_historyUpdateManyMutationInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    change_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    operation_type?: StringFieldUpdateOperationsInput | string
  }

  export type z_task_historyUncheckedUpdateManyInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    change_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    operation_type?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type Stc_categoryScalarRelationFilter = {
    is?: stc_categoryWhereInput
    isNot?: stc_categoryWhereInput
  }

  export type Stc_priorityScalarRelationFilter = {
    is?: stc_priorityWhereInput
    isNot?: stc_priorityWhereInput
  }

  export type Stc_statusScalarRelationFilter = {
    is?: stc_statusWhereInput
    isNot?: stc_statusWhereInput
  }

  export type B1_commentListRelationFilter = {
    every?: b1_commentWhereInput
    some?: b1_commentWhereInput
    none?: b1_commentWhereInput
  }

  export type Z_task_historyListRelationFilter = {
    every?: z_task_historyWhereInput
    some?: z_task_historyWhereInput
    none?: z_task_historyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type b1_commentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type z_task_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type a0_taskCountOrderByAggregateInput = {
    task_id?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
    task_date?: SortOrder
    task_status?: SortOrder
    task_priority?: SortOrder
    task_category?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type a0_taskAvgOrderByAggregateInput = {
    task_id?: SortOrder
  }

  export type a0_taskMaxOrderByAggregateInput = {
    task_id?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
    task_date?: SortOrder
    task_status?: SortOrder
    task_priority?: SortOrder
    task_category?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type a0_taskMinOrderByAggregateInput = {
    task_id?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
    task_date?: SortOrder
    task_status?: SortOrder
    task_priority?: SortOrder
    task_category?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type a0_taskSumOrderByAggregateInput = {
    task_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type A0_taskScalarRelationFilter = {
    is?: a0_taskWhereInput
    isNot?: a0_taskWhereInput
  }

  export type b1_commentCountOrderByAggregateInput = {
    comment_id?: SortOrder
    task_id?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type b1_commentAvgOrderByAggregateInput = {
    comment_id?: SortOrder
    task_id?: SortOrder
  }

  export type b1_commentMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    task_id?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type b1_commentMinOrderByAggregateInput = {
    comment_id?: SortOrder
    task_id?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type b1_commentSumOrderByAggregateInput = {
    comment_id?: SortOrder
    task_id?: SortOrder
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

  export type A0_taskListRelationFilter = {
    every?: a0_taskWhereInput
    some?: a0_taskWhereInput
    none?: a0_taskWhereInput
  }

  export type a0_taskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stc_categoryCountOrderByAggregateInput = {
    category_name?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
    update_reason?: SortOrder
  }

  export type stc_categoryMaxOrderByAggregateInput = {
    category_name?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
    update_reason?: SortOrder
  }

  export type stc_categoryMinOrderByAggregateInput = {
    category_name?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
    update_reason?: SortOrder
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

  export type stc_priorityCountOrderByAggregateInput = {
    app_priority?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
    update_reason?: SortOrder
  }

  export type stc_priorityMaxOrderByAggregateInput = {
    app_priority?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
    update_reason?: SortOrder
  }

  export type stc_priorityMinOrderByAggregateInput = {
    app_priority?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
    update_reason?: SortOrder
  }

  export type stc_statusCountOrderByAggregateInput = {
    app_status?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
    update_reason?: SortOrder
  }

  export type stc_statusMaxOrderByAggregateInput = {
    app_status?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
    update_reason?: SortOrder
  }

  export type stc_statusMinOrderByAggregateInput = {
    app_status?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
    update_reason?: SortOrder
  }

  export type z_task_historyCountOrderByAggregateInput = {
    history_id?: SortOrder
    task_id?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
    task_date?: SortOrder
    task_status?: SortOrder
    task_priority?: SortOrder
    task_category?: SortOrder
    change_timestamp?: SortOrder
    operation_type?: SortOrder
  }

  export type z_task_historyAvgOrderByAggregateInput = {
    history_id?: SortOrder
    task_id?: SortOrder
  }

  export type z_task_historyMaxOrderByAggregateInput = {
    history_id?: SortOrder
    task_id?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
    task_date?: SortOrder
    task_status?: SortOrder
    task_priority?: SortOrder
    task_category?: SortOrder
    change_timestamp?: SortOrder
    operation_type?: SortOrder
  }

  export type z_task_historyMinOrderByAggregateInput = {
    history_id?: SortOrder
    task_id?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
    task_date?: SortOrder
    task_status?: SortOrder
    task_priority?: SortOrder
    task_category?: SortOrder
    change_timestamp?: SortOrder
    operation_type?: SortOrder
  }

  export type z_task_historySumOrderByAggregateInput = {
    history_id?: SortOrder
    task_id?: SortOrder
  }

  export type stc_categoryCreateNestedOneWithoutA0_taskInput = {
    create?: XOR<stc_categoryCreateWithoutA0_taskInput, stc_categoryUncheckedCreateWithoutA0_taskInput>
    connectOrCreate?: stc_categoryCreateOrConnectWithoutA0_taskInput
    connect?: stc_categoryWhereUniqueInput
  }

  export type stc_priorityCreateNestedOneWithoutA0_taskInput = {
    create?: XOR<stc_priorityCreateWithoutA0_taskInput, stc_priorityUncheckedCreateWithoutA0_taskInput>
    connectOrCreate?: stc_priorityCreateOrConnectWithoutA0_taskInput
    connect?: stc_priorityWhereUniqueInput
  }

  export type stc_statusCreateNestedOneWithoutA0_taskInput = {
    create?: XOR<stc_statusCreateWithoutA0_taskInput, stc_statusUncheckedCreateWithoutA0_taskInput>
    connectOrCreate?: stc_statusCreateOrConnectWithoutA0_taskInput
    connect?: stc_statusWhereUniqueInput
  }

  export type b1_commentCreateNestedManyWithoutA0_taskInput = {
    create?: XOR<b1_commentCreateWithoutA0_taskInput, b1_commentUncheckedCreateWithoutA0_taskInput> | b1_commentCreateWithoutA0_taskInput[] | b1_commentUncheckedCreateWithoutA0_taskInput[]
    connectOrCreate?: b1_commentCreateOrConnectWithoutA0_taskInput | b1_commentCreateOrConnectWithoutA0_taskInput[]
    createMany?: b1_commentCreateManyA0_taskInputEnvelope
    connect?: b1_commentWhereUniqueInput | b1_commentWhereUniqueInput[]
  }

  export type z_task_historyCreateNestedManyWithoutA0_taskInput = {
    create?: XOR<z_task_historyCreateWithoutA0_taskInput, z_task_historyUncheckedCreateWithoutA0_taskInput> | z_task_historyCreateWithoutA0_taskInput[] | z_task_historyUncheckedCreateWithoutA0_taskInput[]
    connectOrCreate?: z_task_historyCreateOrConnectWithoutA0_taskInput | z_task_historyCreateOrConnectWithoutA0_taskInput[]
    createMany?: z_task_historyCreateManyA0_taskInputEnvelope
    connect?: z_task_historyWhereUniqueInput | z_task_historyWhereUniqueInput[]
  }

  export type b1_commentUncheckedCreateNestedManyWithoutA0_taskInput = {
    create?: XOR<b1_commentCreateWithoutA0_taskInput, b1_commentUncheckedCreateWithoutA0_taskInput> | b1_commentCreateWithoutA0_taskInput[] | b1_commentUncheckedCreateWithoutA0_taskInput[]
    connectOrCreate?: b1_commentCreateOrConnectWithoutA0_taskInput | b1_commentCreateOrConnectWithoutA0_taskInput[]
    createMany?: b1_commentCreateManyA0_taskInputEnvelope
    connect?: b1_commentWhereUniqueInput | b1_commentWhereUniqueInput[]
  }

  export type z_task_historyUncheckedCreateNestedManyWithoutA0_taskInput = {
    create?: XOR<z_task_historyCreateWithoutA0_taskInput, z_task_historyUncheckedCreateWithoutA0_taskInput> | z_task_historyCreateWithoutA0_taskInput[] | z_task_historyUncheckedCreateWithoutA0_taskInput[]
    connectOrCreate?: z_task_historyCreateOrConnectWithoutA0_taskInput | z_task_historyCreateOrConnectWithoutA0_taskInput[]
    createMany?: z_task_historyCreateManyA0_taskInputEnvelope
    connect?: z_task_historyWhereUniqueInput | z_task_historyWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type stc_categoryUpdateOneRequiredWithoutA0_taskNestedInput = {
    create?: XOR<stc_categoryCreateWithoutA0_taskInput, stc_categoryUncheckedCreateWithoutA0_taskInput>
    connectOrCreate?: stc_categoryCreateOrConnectWithoutA0_taskInput
    upsert?: stc_categoryUpsertWithoutA0_taskInput
    connect?: stc_categoryWhereUniqueInput
    update?: XOR<XOR<stc_categoryUpdateToOneWithWhereWithoutA0_taskInput, stc_categoryUpdateWithoutA0_taskInput>, stc_categoryUncheckedUpdateWithoutA0_taskInput>
  }

  export type stc_priorityUpdateOneRequiredWithoutA0_taskNestedInput = {
    create?: XOR<stc_priorityCreateWithoutA0_taskInput, stc_priorityUncheckedCreateWithoutA0_taskInput>
    connectOrCreate?: stc_priorityCreateOrConnectWithoutA0_taskInput
    upsert?: stc_priorityUpsertWithoutA0_taskInput
    connect?: stc_priorityWhereUniqueInput
    update?: XOR<XOR<stc_priorityUpdateToOneWithWhereWithoutA0_taskInput, stc_priorityUpdateWithoutA0_taskInput>, stc_priorityUncheckedUpdateWithoutA0_taskInput>
  }

  export type stc_statusUpdateOneRequiredWithoutA0_taskNestedInput = {
    create?: XOR<stc_statusCreateWithoutA0_taskInput, stc_statusUncheckedCreateWithoutA0_taskInput>
    connectOrCreate?: stc_statusCreateOrConnectWithoutA0_taskInput
    upsert?: stc_statusUpsertWithoutA0_taskInput
    connect?: stc_statusWhereUniqueInput
    update?: XOR<XOR<stc_statusUpdateToOneWithWhereWithoutA0_taskInput, stc_statusUpdateWithoutA0_taskInput>, stc_statusUncheckedUpdateWithoutA0_taskInput>
  }

  export type b1_commentUpdateManyWithoutA0_taskNestedInput = {
    create?: XOR<b1_commentCreateWithoutA0_taskInput, b1_commentUncheckedCreateWithoutA0_taskInput> | b1_commentCreateWithoutA0_taskInput[] | b1_commentUncheckedCreateWithoutA0_taskInput[]
    connectOrCreate?: b1_commentCreateOrConnectWithoutA0_taskInput | b1_commentCreateOrConnectWithoutA0_taskInput[]
    upsert?: b1_commentUpsertWithWhereUniqueWithoutA0_taskInput | b1_commentUpsertWithWhereUniqueWithoutA0_taskInput[]
    createMany?: b1_commentCreateManyA0_taskInputEnvelope
    set?: b1_commentWhereUniqueInput | b1_commentWhereUniqueInput[]
    disconnect?: b1_commentWhereUniqueInput | b1_commentWhereUniqueInput[]
    delete?: b1_commentWhereUniqueInput | b1_commentWhereUniqueInput[]
    connect?: b1_commentWhereUniqueInput | b1_commentWhereUniqueInput[]
    update?: b1_commentUpdateWithWhereUniqueWithoutA0_taskInput | b1_commentUpdateWithWhereUniqueWithoutA0_taskInput[]
    updateMany?: b1_commentUpdateManyWithWhereWithoutA0_taskInput | b1_commentUpdateManyWithWhereWithoutA0_taskInput[]
    deleteMany?: b1_commentScalarWhereInput | b1_commentScalarWhereInput[]
  }

  export type z_task_historyUpdateManyWithoutA0_taskNestedInput = {
    create?: XOR<z_task_historyCreateWithoutA0_taskInput, z_task_historyUncheckedCreateWithoutA0_taskInput> | z_task_historyCreateWithoutA0_taskInput[] | z_task_historyUncheckedCreateWithoutA0_taskInput[]
    connectOrCreate?: z_task_historyCreateOrConnectWithoutA0_taskInput | z_task_historyCreateOrConnectWithoutA0_taskInput[]
    upsert?: z_task_historyUpsertWithWhereUniqueWithoutA0_taskInput | z_task_historyUpsertWithWhereUniqueWithoutA0_taskInput[]
    createMany?: z_task_historyCreateManyA0_taskInputEnvelope
    set?: z_task_historyWhereUniqueInput | z_task_historyWhereUniqueInput[]
    disconnect?: z_task_historyWhereUniqueInput | z_task_historyWhereUniqueInput[]
    delete?: z_task_historyWhereUniqueInput | z_task_historyWhereUniqueInput[]
    connect?: z_task_historyWhereUniqueInput | z_task_historyWhereUniqueInput[]
    update?: z_task_historyUpdateWithWhereUniqueWithoutA0_taskInput | z_task_historyUpdateWithWhereUniqueWithoutA0_taskInput[]
    updateMany?: z_task_historyUpdateManyWithWhereWithoutA0_taskInput | z_task_historyUpdateManyWithWhereWithoutA0_taskInput[]
    deleteMany?: z_task_historyScalarWhereInput | z_task_historyScalarWhereInput[]
  }

  export type b1_commentUncheckedUpdateManyWithoutA0_taskNestedInput = {
    create?: XOR<b1_commentCreateWithoutA0_taskInput, b1_commentUncheckedCreateWithoutA0_taskInput> | b1_commentCreateWithoutA0_taskInput[] | b1_commentUncheckedCreateWithoutA0_taskInput[]
    connectOrCreate?: b1_commentCreateOrConnectWithoutA0_taskInput | b1_commentCreateOrConnectWithoutA0_taskInput[]
    upsert?: b1_commentUpsertWithWhereUniqueWithoutA0_taskInput | b1_commentUpsertWithWhereUniqueWithoutA0_taskInput[]
    createMany?: b1_commentCreateManyA0_taskInputEnvelope
    set?: b1_commentWhereUniqueInput | b1_commentWhereUniqueInput[]
    disconnect?: b1_commentWhereUniqueInput | b1_commentWhereUniqueInput[]
    delete?: b1_commentWhereUniqueInput | b1_commentWhereUniqueInput[]
    connect?: b1_commentWhereUniqueInput | b1_commentWhereUniqueInput[]
    update?: b1_commentUpdateWithWhereUniqueWithoutA0_taskInput | b1_commentUpdateWithWhereUniqueWithoutA0_taskInput[]
    updateMany?: b1_commentUpdateManyWithWhereWithoutA0_taskInput | b1_commentUpdateManyWithWhereWithoutA0_taskInput[]
    deleteMany?: b1_commentScalarWhereInput | b1_commentScalarWhereInput[]
  }

  export type z_task_historyUncheckedUpdateManyWithoutA0_taskNestedInput = {
    create?: XOR<z_task_historyCreateWithoutA0_taskInput, z_task_historyUncheckedCreateWithoutA0_taskInput> | z_task_historyCreateWithoutA0_taskInput[] | z_task_historyUncheckedCreateWithoutA0_taskInput[]
    connectOrCreate?: z_task_historyCreateOrConnectWithoutA0_taskInput | z_task_historyCreateOrConnectWithoutA0_taskInput[]
    upsert?: z_task_historyUpsertWithWhereUniqueWithoutA0_taskInput | z_task_historyUpsertWithWhereUniqueWithoutA0_taskInput[]
    createMany?: z_task_historyCreateManyA0_taskInputEnvelope
    set?: z_task_historyWhereUniqueInput | z_task_historyWhereUniqueInput[]
    disconnect?: z_task_historyWhereUniqueInput | z_task_historyWhereUniqueInput[]
    delete?: z_task_historyWhereUniqueInput | z_task_historyWhereUniqueInput[]
    connect?: z_task_historyWhereUniqueInput | z_task_historyWhereUniqueInput[]
    update?: z_task_historyUpdateWithWhereUniqueWithoutA0_taskInput | z_task_historyUpdateWithWhereUniqueWithoutA0_taskInput[]
    updateMany?: z_task_historyUpdateManyWithWhereWithoutA0_taskInput | z_task_historyUpdateManyWithWhereWithoutA0_taskInput[]
    deleteMany?: z_task_historyScalarWhereInput | z_task_historyScalarWhereInput[]
  }

  export type a0_taskCreateNestedOneWithoutB1_commentInput = {
    create?: XOR<a0_taskCreateWithoutB1_commentInput, a0_taskUncheckedCreateWithoutB1_commentInput>
    connectOrCreate?: a0_taskCreateOrConnectWithoutB1_commentInput
    connect?: a0_taskWhereUniqueInput
  }

  export type a0_taskUpdateOneRequiredWithoutB1_commentNestedInput = {
    create?: XOR<a0_taskCreateWithoutB1_commentInput, a0_taskUncheckedCreateWithoutB1_commentInput>
    connectOrCreate?: a0_taskCreateOrConnectWithoutB1_commentInput
    upsert?: a0_taskUpsertWithoutB1_commentInput
    connect?: a0_taskWhereUniqueInput
    update?: XOR<XOR<a0_taskUpdateToOneWithWhereWithoutB1_commentInput, a0_taskUpdateWithoutB1_commentInput>, a0_taskUncheckedUpdateWithoutB1_commentInput>
  }

  export type a0_taskCreateNestedManyWithoutStc_categoryInput = {
    create?: XOR<a0_taskCreateWithoutStc_categoryInput, a0_taskUncheckedCreateWithoutStc_categoryInput> | a0_taskCreateWithoutStc_categoryInput[] | a0_taskUncheckedCreateWithoutStc_categoryInput[]
    connectOrCreate?: a0_taskCreateOrConnectWithoutStc_categoryInput | a0_taskCreateOrConnectWithoutStc_categoryInput[]
    createMany?: a0_taskCreateManyStc_categoryInputEnvelope
    connect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
  }

  export type a0_taskUncheckedCreateNestedManyWithoutStc_categoryInput = {
    create?: XOR<a0_taskCreateWithoutStc_categoryInput, a0_taskUncheckedCreateWithoutStc_categoryInput> | a0_taskCreateWithoutStc_categoryInput[] | a0_taskUncheckedCreateWithoutStc_categoryInput[]
    connectOrCreate?: a0_taskCreateOrConnectWithoutStc_categoryInput | a0_taskCreateOrConnectWithoutStc_categoryInput[]
    createMany?: a0_taskCreateManyStc_categoryInputEnvelope
    connect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type a0_taskUpdateManyWithoutStc_categoryNestedInput = {
    create?: XOR<a0_taskCreateWithoutStc_categoryInput, a0_taskUncheckedCreateWithoutStc_categoryInput> | a0_taskCreateWithoutStc_categoryInput[] | a0_taskUncheckedCreateWithoutStc_categoryInput[]
    connectOrCreate?: a0_taskCreateOrConnectWithoutStc_categoryInput | a0_taskCreateOrConnectWithoutStc_categoryInput[]
    upsert?: a0_taskUpsertWithWhereUniqueWithoutStc_categoryInput | a0_taskUpsertWithWhereUniqueWithoutStc_categoryInput[]
    createMany?: a0_taskCreateManyStc_categoryInputEnvelope
    set?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    disconnect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    delete?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    connect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    update?: a0_taskUpdateWithWhereUniqueWithoutStc_categoryInput | a0_taskUpdateWithWhereUniqueWithoutStc_categoryInput[]
    updateMany?: a0_taskUpdateManyWithWhereWithoutStc_categoryInput | a0_taskUpdateManyWithWhereWithoutStc_categoryInput[]
    deleteMany?: a0_taskScalarWhereInput | a0_taskScalarWhereInput[]
  }

  export type a0_taskUncheckedUpdateManyWithoutStc_categoryNestedInput = {
    create?: XOR<a0_taskCreateWithoutStc_categoryInput, a0_taskUncheckedCreateWithoutStc_categoryInput> | a0_taskCreateWithoutStc_categoryInput[] | a0_taskUncheckedCreateWithoutStc_categoryInput[]
    connectOrCreate?: a0_taskCreateOrConnectWithoutStc_categoryInput | a0_taskCreateOrConnectWithoutStc_categoryInput[]
    upsert?: a0_taskUpsertWithWhereUniqueWithoutStc_categoryInput | a0_taskUpsertWithWhereUniqueWithoutStc_categoryInput[]
    createMany?: a0_taskCreateManyStc_categoryInputEnvelope
    set?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    disconnect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    delete?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    connect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    update?: a0_taskUpdateWithWhereUniqueWithoutStc_categoryInput | a0_taskUpdateWithWhereUniqueWithoutStc_categoryInput[]
    updateMany?: a0_taskUpdateManyWithWhereWithoutStc_categoryInput | a0_taskUpdateManyWithWhereWithoutStc_categoryInput[]
    deleteMany?: a0_taskScalarWhereInput | a0_taskScalarWhereInput[]
  }

  export type a0_taskCreateNestedManyWithoutStc_priorityInput = {
    create?: XOR<a0_taskCreateWithoutStc_priorityInput, a0_taskUncheckedCreateWithoutStc_priorityInput> | a0_taskCreateWithoutStc_priorityInput[] | a0_taskUncheckedCreateWithoutStc_priorityInput[]
    connectOrCreate?: a0_taskCreateOrConnectWithoutStc_priorityInput | a0_taskCreateOrConnectWithoutStc_priorityInput[]
    createMany?: a0_taskCreateManyStc_priorityInputEnvelope
    connect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
  }

  export type a0_taskUncheckedCreateNestedManyWithoutStc_priorityInput = {
    create?: XOR<a0_taskCreateWithoutStc_priorityInput, a0_taskUncheckedCreateWithoutStc_priorityInput> | a0_taskCreateWithoutStc_priorityInput[] | a0_taskUncheckedCreateWithoutStc_priorityInput[]
    connectOrCreate?: a0_taskCreateOrConnectWithoutStc_priorityInput | a0_taskCreateOrConnectWithoutStc_priorityInput[]
    createMany?: a0_taskCreateManyStc_priorityInputEnvelope
    connect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
  }

  export type a0_taskUpdateManyWithoutStc_priorityNestedInput = {
    create?: XOR<a0_taskCreateWithoutStc_priorityInput, a0_taskUncheckedCreateWithoutStc_priorityInput> | a0_taskCreateWithoutStc_priorityInput[] | a0_taskUncheckedCreateWithoutStc_priorityInput[]
    connectOrCreate?: a0_taskCreateOrConnectWithoutStc_priorityInput | a0_taskCreateOrConnectWithoutStc_priorityInput[]
    upsert?: a0_taskUpsertWithWhereUniqueWithoutStc_priorityInput | a0_taskUpsertWithWhereUniqueWithoutStc_priorityInput[]
    createMany?: a0_taskCreateManyStc_priorityInputEnvelope
    set?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    disconnect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    delete?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    connect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    update?: a0_taskUpdateWithWhereUniqueWithoutStc_priorityInput | a0_taskUpdateWithWhereUniqueWithoutStc_priorityInput[]
    updateMany?: a0_taskUpdateManyWithWhereWithoutStc_priorityInput | a0_taskUpdateManyWithWhereWithoutStc_priorityInput[]
    deleteMany?: a0_taskScalarWhereInput | a0_taskScalarWhereInput[]
  }

  export type a0_taskUncheckedUpdateManyWithoutStc_priorityNestedInput = {
    create?: XOR<a0_taskCreateWithoutStc_priorityInput, a0_taskUncheckedCreateWithoutStc_priorityInput> | a0_taskCreateWithoutStc_priorityInput[] | a0_taskUncheckedCreateWithoutStc_priorityInput[]
    connectOrCreate?: a0_taskCreateOrConnectWithoutStc_priorityInput | a0_taskCreateOrConnectWithoutStc_priorityInput[]
    upsert?: a0_taskUpsertWithWhereUniqueWithoutStc_priorityInput | a0_taskUpsertWithWhereUniqueWithoutStc_priorityInput[]
    createMany?: a0_taskCreateManyStc_priorityInputEnvelope
    set?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    disconnect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    delete?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    connect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    update?: a0_taskUpdateWithWhereUniqueWithoutStc_priorityInput | a0_taskUpdateWithWhereUniqueWithoutStc_priorityInput[]
    updateMany?: a0_taskUpdateManyWithWhereWithoutStc_priorityInput | a0_taskUpdateManyWithWhereWithoutStc_priorityInput[]
    deleteMany?: a0_taskScalarWhereInput | a0_taskScalarWhereInput[]
  }

  export type a0_taskCreateNestedManyWithoutStc_statusInput = {
    create?: XOR<a0_taskCreateWithoutStc_statusInput, a0_taskUncheckedCreateWithoutStc_statusInput> | a0_taskCreateWithoutStc_statusInput[] | a0_taskUncheckedCreateWithoutStc_statusInput[]
    connectOrCreate?: a0_taskCreateOrConnectWithoutStc_statusInput | a0_taskCreateOrConnectWithoutStc_statusInput[]
    createMany?: a0_taskCreateManyStc_statusInputEnvelope
    connect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
  }

  export type a0_taskUncheckedCreateNestedManyWithoutStc_statusInput = {
    create?: XOR<a0_taskCreateWithoutStc_statusInput, a0_taskUncheckedCreateWithoutStc_statusInput> | a0_taskCreateWithoutStc_statusInput[] | a0_taskUncheckedCreateWithoutStc_statusInput[]
    connectOrCreate?: a0_taskCreateOrConnectWithoutStc_statusInput | a0_taskCreateOrConnectWithoutStc_statusInput[]
    createMany?: a0_taskCreateManyStc_statusInputEnvelope
    connect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
  }

  export type a0_taskUpdateManyWithoutStc_statusNestedInput = {
    create?: XOR<a0_taskCreateWithoutStc_statusInput, a0_taskUncheckedCreateWithoutStc_statusInput> | a0_taskCreateWithoutStc_statusInput[] | a0_taskUncheckedCreateWithoutStc_statusInput[]
    connectOrCreate?: a0_taskCreateOrConnectWithoutStc_statusInput | a0_taskCreateOrConnectWithoutStc_statusInput[]
    upsert?: a0_taskUpsertWithWhereUniqueWithoutStc_statusInput | a0_taskUpsertWithWhereUniqueWithoutStc_statusInput[]
    createMany?: a0_taskCreateManyStc_statusInputEnvelope
    set?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    disconnect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    delete?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    connect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    update?: a0_taskUpdateWithWhereUniqueWithoutStc_statusInput | a0_taskUpdateWithWhereUniqueWithoutStc_statusInput[]
    updateMany?: a0_taskUpdateManyWithWhereWithoutStc_statusInput | a0_taskUpdateManyWithWhereWithoutStc_statusInput[]
    deleteMany?: a0_taskScalarWhereInput | a0_taskScalarWhereInput[]
  }

  export type a0_taskUncheckedUpdateManyWithoutStc_statusNestedInput = {
    create?: XOR<a0_taskCreateWithoutStc_statusInput, a0_taskUncheckedCreateWithoutStc_statusInput> | a0_taskCreateWithoutStc_statusInput[] | a0_taskUncheckedCreateWithoutStc_statusInput[]
    connectOrCreate?: a0_taskCreateOrConnectWithoutStc_statusInput | a0_taskCreateOrConnectWithoutStc_statusInput[]
    upsert?: a0_taskUpsertWithWhereUniqueWithoutStc_statusInput | a0_taskUpsertWithWhereUniqueWithoutStc_statusInput[]
    createMany?: a0_taskCreateManyStc_statusInputEnvelope
    set?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    disconnect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    delete?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    connect?: a0_taskWhereUniqueInput | a0_taskWhereUniqueInput[]
    update?: a0_taskUpdateWithWhereUniqueWithoutStc_statusInput | a0_taskUpdateWithWhereUniqueWithoutStc_statusInput[]
    updateMany?: a0_taskUpdateManyWithWhereWithoutStc_statusInput | a0_taskUpdateManyWithWhereWithoutStc_statusInput[]
    deleteMany?: a0_taskScalarWhereInput | a0_taskScalarWhereInput[]
  }

  export type a0_taskCreateNestedOneWithoutZ_task_historyInput = {
    create?: XOR<a0_taskCreateWithoutZ_task_historyInput, a0_taskUncheckedCreateWithoutZ_task_historyInput>
    connectOrCreate?: a0_taskCreateOrConnectWithoutZ_task_historyInput
    connect?: a0_taskWhereUniqueInput
  }

  export type a0_taskUpdateOneRequiredWithoutZ_task_historyNestedInput = {
    create?: XOR<a0_taskCreateWithoutZ_task_historyInput, a0_taskUncheckedCreateWithoutZ_task_historyInput>
    connectOrCreate?: a0_taskCreateOrConnectWithoutZ_task_historyInput
    upsert?: a0_taskUpsertWithoutZ_task_historyInput
    connect?: a0_taskWhereUniqueInput
    update?: XOR<XOR<a0_taskUpdateToOneWithWhereWithoutZ_task_historyInput, a0_taskUpdateWithoutZ_task_historyInput>, a0_taskUncheckedUpdateWithoutZ_task_historyInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type stc_categoryCreateWithoutA0_taskInput = {
    category_name: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
  }

  export type stc_categoryUncheckedCreateWithoutA0_taskInput = {
    category_name: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
  }

  export type stc_categoryCreateOrConnectWithoutA0_taskInput = {
    where: stc_categoryWhereUniqueInput
    create: XOR<stc_categoryCreateWithoutA0_taskInput, stc_categoryUncheckedCreateWithoutA0_taskInput>
  }

  export type stc_priorityCreateWithoutA0_taskInput = {
    app_priority: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
  }

  export type stc_priorityUncheckedCreateWithoutA0_taskInput = {
    app_priority: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
  }

  export type stc_priorityCreateOrConnectWithoutA0_taskInput = {
    where: stc_priorityWhereUniqueInput
    create: XOR<stc_priorityCreateWithoutA0_taskInput, stc_priorityUncheckedCreateWithoutA0_taskInput>
  }

  export type stc_statusCreateWithoutA0_taskInput = {
    app_status: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
  }

  export type stc_statusUncheckedCreateWithoutA0_taskInput = {
    app_status: string
    created_date?: Date | string
    updated_date?: Date | string | null
    update_reason?: string | null
  }

  export type stc_statusCreateOrConnectWithoutA0_taskInput = {
    where: stc_statusWhereUniqueInput
    create: XOR<stc_statusCreateWithoutA0_taskInput, stc_statusUncheckedCreateWithoutA0_taskInput>
  }

  export type b1_commentCreateWithoutA0_taskInput = {
    comment_id?: bigint | number
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type b1_commentUncheckedCreateWithoutA0_taskInput = {
    comment_id?: bigint | number
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type b1_commentCreateOrConnectWithoutA0_taskInput = {
    where: b1_commentWhereUniqueInput
    create: XOR<b1_commentCreateWithoutA0_taskInput, b1_commentUncheckedCreateWithoutA0_taskInput>
  }

  export type b1_commentCreateManyA0_taskInputEnvelope = {
    data: b1_commentCreateManyA0_taskInput | b1_commentCreateManyA0_taskInput[]
    skipDuplicates?: boolean
  }

  export type z_task_historyCreateWithoutA0_taskInput = {
    history_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_priority: string
    task_category: string
    change_timestamp?: Date | string
    operation_type: string
  }

  export type z_task_historyUncheckedCreateWithoutA0_taskInput = {
    history_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_priority: string
    task_category: string
    change_timestamp?: Date | string
    operation_type: string
  }

  export type z_task_historyCreateOrConnectWithoutA0_taskInput = {
    where: z_task_historyWhereUniqueInput
    create: XOR<z_task_historyCreateWithoutA0_taskInput, z_task_historyUncheckedCreateWithoutA0_taskInput>
  }

  export type z_task_historyCreateManyA0_taskInputEnvelope = {
    data: z_task_historyCreateManyA0_taskInput | z_task_historyCreateManyA0_taskInput[]
    skipDuplicates?: boolean
  }

  export type stc_categoryUpsertWithoutA0_taskInput = {
    update: XOR<stc_categoryUpdateWithoutA0_taskInput, stc_categoryUncheckedUpdateWithoutA0_taskInput>
    create: XOR<stc_categoryCreateWithoutA0_taskInput, stc_categoryUncheckedCreateWithoutA0_taskInput>
    where?: stc_categoryWhereInput
  }

  export type stc_categoryUpdateToOneWithWhereWithoutA0_taskInput = {
    where?: stc_categoryWhereInput
    data: XOR<stc_categoryUpdateWithoutA0_taskInput, stc_categoryUncheckedUpdateWithoutA0_taskInput>
  }

  export type stc_categoryUpdateWithoutA0_taskInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stc_categoryUncheckedUpdateWithoutA0_taskInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stc_priorityUpsertWithoutA0_taskInput = {
    update: XOR<stc_priorityUpdateWithoutA0_taskInput, stc_priorityUncheckedUpdateWithoutA0_taskInput>
    create: XOR<stc_priorityCreateWithoutA0_taskInput, stc_priorityUncheckedCreateWithoutA0_taskInput>
    where?: stc_priorityWhereInput
  }

  export type stc_priorityUpdateToOneWithWhereWithoutA0_taskInput = {
    where?: stc_priorityWhereInput
    data: XOR<stc_priorityUpdateWithoutA0_taskInput, stc_priorityUncheckedUpdateWithoutA0_taskInput>
  }

  export type stc_priorityUpdateWithoutA0_taskInput = {
    app_priority?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stc_priorityUncheckedUpdateWithoutA0_taskInput = {
    app_priority?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stc_statusUpsertWithoutA0_taskInput = {
    update: XOR<stc_statusUpdateWithoutA0_taskInput, stc_statusUncheckedUpdateWithoutA0_taskInput>
    create: XOR<stc_statusCreateWithoutA0_taskInput, stc_statusUncheckedCreateWithoutA0_taskInput>
    where?: stc_statusWhereInput
  }

  export type stc_statusUpdateToOneWithWhereWithoutA0_taskInput = {
    where?: stc_statusWhereInput
    data: XOR<stc_statusUpdateWithoutA0_taskInput, stc_statusUncheckedUpdateWithoutA0_taskInput>
  }

  export type stc_statusUpdateWithoutA0_taskInput = {
    app_status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stc_statusUncheckedUpdateWithoutA0_taskInput = {
    app_status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type b1_commentUpsertWithWhereUniqueWithoutA0_taskInput = {
    where: b1_commentWhereUniqueInput
    update: XOR<b1_commentUpdateWithoutA0_taskInput, b1_commentUncheckedUpdateWithoutA0_taskInput>
    create: XOR<b1_commentCreateWithoutA0_taskInput, b1_commentUncheckedCreateWithoutA0_taskInput>
  }

  export type b1_commentUpdateWithWhereUniqueWithoutA0_taskInput = {
    where: b1_commentWhereUniqueInput
    data: XOR<b1_commentUpdateWithoutA0_taskInput, b1_commentUncheckedUpdateWithoutA0_taskInput>
  }

  export type b1_commentUpdateManyWithWhereWithoutA0_taskInput = {
    where: b1_commentScalarWhereInput
    data: XOR<b1_commentUpdateManyMutationInput, b1_commentUncheckedUpdateManyWithoutA0_taskInput>
  }

  export type b1_commentScalarWhereInput = {
    AND?: b1_commentScalarWhereInput | b1_commentScalarWhereInput[]
    OR?: b1_commentScalarWhereInput[]
    NOT?: b1_commentScalarWhereInput | b1_commentScalarWhereInput[]
    comment_id?: BigIntFilter<"b1_comment"> | bigint | number
    task_id?: BigIntFilter<"b1_comment"> | bigint | number
    comment_text?: StringFilter<"b1_comment"> | string
    created_at?: DateTimeFilter<"b1_comment"> | Date | string
    updated_at?: DateTimeNullableFilter<"b1_comment"> | Date | string | null
  }

  export type z_task_historyUpsertWithWhereUniqueWithoutA0_taskInput = {
    where: z_task_historyWhereUniqueInput
    update: XOR<z_task_historyUpdateWithoutA0_taskInput, z_task_historyUncheckedUpdateWithoutA0_taskInput>
    create: XOR<z_task_historyCreateWithoutA0_taskInput, z_task_historyUncheckedCreateWithoutA0_taskInput>
  }

  export type z_task_historyUpdateWithWhereUniqueWithoutA0_taskInput = {
    where: z_task_historyWhereUniqueInput
    data: XOR<z_task_historyUpdateWithoutA0_taskInput, z_task_historyUncheckedUpdateWithoutA0_taskInput>
  }

  export type z_task_historyUpdateManyWithWhereWithoutA0_taskInput = {
    where: z_task_historyScalarWhereInput
    data: XOR<z_task_historyUpdateManyMutationInput, z_task_historyUncheckedUpdateManyWithoutA0_taskInput>
  }

  export type z_task_historyScalarWhereInput = {
    AND?: z_task_historyScalarWhereInput | z_task_historyScalarWhereInput[]
    OR?: z_task_historyScalarWhereInput[]
    NOT?: z_task_historyScalarWhereInput | z_task_historyScalarWhereInput[]
    history_id?: BigIntFilter<"z_task_history"> | bigint | number
    task_id?: BigIntFilter<"z_task_history"> | bigint | number
    task_title?: StringFilter<"z_task_history"> | string
    task_description?: StringFilter<"z_task_history"> | string
    task_date?: DateTimeNullableFilter<"z_task_history"> | Date | string | null
    task_status?: StringFilter<"z_task_history"> | string
    task_priority?: StringFilter<"z_task_history"> | string
    task_category?: StringFilter<"z_task_history"> | string
    change_timestamp?: DateTimeFilter<"z_task_history"> | Date | string
    operation_type?: StringFilter<"z_task_history"> | string
  }

  export type a0_taskCreateWithoutB1_commentInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    created_date?: Date | string
    updated_date?: Date | string | null
    stc_category: stc_categoryCreateNestedOneWithoutA0_taskInput
    stc_priority: stc_priorityCreateNestedOneWithoutA0_taskInput
    stc_status: stc_statusCreateNestedOneWithoutA0_taskInput
    z_task_history?: z_task_historyCreateNestedManyWithoutA0_taskInput
  }

  export type a0_taskUncheckedCreateWithoutB1_commentInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_priority: string
    task_category: string
    created_date?: Date | string
    updated_date?: Date | string | null
    z_task_history?: z_task_historyUncheckedCreateNestedManyWithoutA0_taskInput
  }

  export type a0_taskCreateOrConnectWithoutB1_commentInput = {
    where: a0_taskWhereUniqueInput
    create: XOR<a0_taskCreateWithoutB1_commentInput, a0_taskUncheckedCreateWithoutB1_commentInput>
  }

  export type a0_taskUpsertWithoutB1_commentInput = {
    update: XOR<a0_taskUpdateWithoutB1_commentInput, a0_taskUncheckedUpdateWithoutB1_commentInput>
    create: XOR<a0_taskCreateWithoutB1_commentInput, a0_taskUncheckedCreateWithoutB1_commentInput>
    where?: a0_taskWhereInput
  }

  export type a0_taskUpdateToOneWithWhereWithoutB1_commentInput = {
    where?: a0_taskWhereInput
    data: XOR<a0_taskUpdateWithoutB1_commentInput, a0_taskUncheckedUpdateWithoutB1_commentInput>
  }

  export type a0_taskUpdateWithoutB1_commentInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stc_category?: stc_categoryUpdateOneRequiredWithoutA0_taskNestedInput
    stc_priority?: stc_priorityUpdateOneRequiredWithoutA0_taskNestedInput
    stc_status?: stc_statusUpdateOneRequiredWithoutA0_taskNestedInput
    z_task_history?: z_task_historyUpdateManyWithoutA0_taskNestedInput
  }

  export type a0_taskUncheckedUpdateWithoutB1_commentInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    z_task_history?: z_task_historyUncheckedUpdateManyWithoutA0_taskNestedInput
  }

  export type a0_taskCreateWithoutStc_categoryInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    created_date?: Date | string
    updated_date?: Date | string | null
    stc_priority: stc_priorityCreateNestedOneWithoutA0_taskInput
    stc_status: stc_statusCreateNestedOneWithoutA0_taskInput
    b1_comment?: b1_commentCreateNestedManyWithoutA0_taskInput
    z_task_history?: z_task_historyCreateNestedManyWithoutA0_taskInput
  }

  export type a0_taskUncheckedCreateWithoutStc_categoryInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_priority: string
    created_date?: Date | string
    updated_date?: Date | string | null
    b1_comment?: b1_commentUncheckedCreateNestedManyWithoutA0_taskInput
    z_task_history?: z_task_historyUncheckedCreateNestedManyWithoutA0_taskInput
  }

  export type a0_taskCreateOrConnectWithoutStc_categoryInput = {
    where: a0_taskWhereUniqueInput
    create: XOR<a0_taskCreateWithoutStc_categoryInput, a0_taskUncheckedCreateWithoutStc_categoryInput>
  }

  export type a0_taskCreateManyStc_categoryInputEnvelope = {
    data: a0_taskCreateManyStc_categoryInput | a0_taskCreateManyStc_categoryInput[]
    skipDuplicates?: boolean
  }

  export type a0_taskUpsertWithWhereUniqueWithoutStc_categoryInput = {
    where: a0_taskWhereUniqueInput
    update: XOR<a0_taskUpdateWithoutStc_categoryInput, a0_taskUncheckedUpdateWithoutStc_categoryInput>
    create: XOR<a0_taskCreateWithoutStc_categoryInput, a0_taskUncheckedCreateWithoutStc_categoryInput>
  }

  export type a0_taskUpdateWithWhereUniqueWithoutStc_categoryInput = {
    where: a0_taskWhereUniqueInput
    data: XOR<a0_taskUpdateWithoutStc_categoryInput, a0_taskUncheckedUpdateWithoutStc_categoryInput>
  }

  export type a0_taskUpdateManyWithWhereWithoutStc_categoryInput = {
    where: a0_taskScalarWhereInput
    data: XOR<a0_taskUpdateManyMutationInput, a0_taskUncheckedUpdateManyWithoutStc_categoryInput>
  }

  export type a0_taskScalarWhereInput = {
    AND?: a0_taskScalarWhereInput | a0_taskScalarWhereInput[]
    OR?: a0_taskScalarWhereInput[]
    NOT?: a0_taskScalarWhereInput | a0_taskScalarWhereInput[]
    task_id?: BigIntFilter<"a0_task"> | bigint | number
    task_title?: StringFilter<"a0_task"> | string
    task_description?: StringFilter<"a0_task"> | string
    task_date?: DateTimeNullableFilter<"a0_task"> | Date | string | null
    task_status?: StringFilter<"a0_task"> | string
    task_priority?: StringFilter<"a0_task"> | string
    task_category?: StringFilter<"a0_task"> | string
    created_date?: DateTimeFilter<"a0_task"> | Date | string
    updated_date?: DateTimeNullableFilter<"a0_task"> | Date | string | null
  }

  export type a0_taskCreateWithoutStc_priorityInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    created_date?: Date | string
    updated_date?: Date | string | null
    stc_category: stc_categoryCreateNestedOneWithoutA0_taskInput
    stc_status: stc_statusCreateNestedOneWithoutA0_taskInput
    b1_comment?: b1_commentCreateNestedManyWithoutA0_taskInput
    z_task_history?: z_task_historyCreateNestedManyWithoutA0_taskInput
  }

  export type a0_taskUncheckedCreateWithoutStc_priorityInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_category: string
    created_date?: Date | string
    updated_date?: Date | string | null
    b1_comment?: b1_commentUncheckedCreateNestedManyWithoutA0_taskInput
    z_task_history?: z_task_historyUncheckedCreateNestedManyWithoutA0_taskInput
  }

  export type a0_taskCreateOrConnectWithoutStc_priorityInput = {
    where: a0_taskWhereUniqueInput
    create: XOR<a0_taskCreateWithoutStc_priorityInput, a0_taskUncheckedCreateWithoutStc_priorityInput>
  }

  export type a0_taskCreateManyStc_priorityInputEnvelope = {
    data: a0_taskCreateManyStc_priorityInput | a0_taskCreateManyStc_priorityInput[]
    skipDuplicates?: boolean
  }

  export type a0_taskUpsertWithWhereUniqueWithoutStc_priorityInput = {
    where: a0_taskWhereUniqueInput
    update: XOR<a0_taskUpdateWithoutStc_priorityInput, a0_taskUncheckedUpdateWithoutStc_priorityInput>
    create: XOR<a0_taskCreateWithoutStc_priorityInput, a0_taskUncheckedCreateWithoutStc_priorityInput>
  }

  export type a0_taskUpdateWithWhereUniqueWithoutStc_priorityInput = {
    where: a0_taskWhereUniqueInput
    data: XOR<a0_taskUpdateWithoutStc_priorityInput, a0_taskUncheckedUpdateWithoutStc_priorityInput>
  }

  export type a0_taskUpdateManyWithWhereWithoutStc_priorityInput = {
    where: a0_taskScalarWhereInput
    data: XOR<a0_taskUpdateManyMutationInput, a0_taskUncheckedUpdateManyWithoutStc_priorityInput>
  }

  export type a0_taskCreateWithoutStc_statusInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    created_date?: Date | string
    updated_date?: Date | string | null
    stc_category: stc_categoryCreateNestedOneWithoutA0_taskInput
    stc_priority: stc_priorityCreateNestedOneWithoutA0_taskInput
    b1_comment?: b1_commentCreateNestedManyWithoutA0_taskInput
    z_task_history?: z_task_historyCreateNestedManyWithoutA0_taskInput
  }

  export type a0_taskUncheckedCreateWithoutStc_statusInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_priority: string
    task_category: string
    created_date?: Date | string
    updated_date?: Date | string | null
    b1_comment?: b1_commentUncheckedCreateNestedManyWithoutA0_taskInput
    z_task_history?: z_task_historyUncheckedCreateNestedManyWithoutA0_taskInput
  }

  export type a0_taskCreateOrConnectWithoutStc_statusInput = {
    where: a0_taskWhereUniqueInput
    create: XOR<a0_taskCreateWithoutStc_statusInput, a0_taskUncheckedCreateWithoutStc_statusInput>
  }

  export type a0_taskCreateManyStc_statusInputEnvelope = {
    data: a0_taskCreateManyStc_statusInput | a0_taskCreateManyStc_statusInput[]
    skipDuplicates?: boolean
  }

  export type a0_taskUpsertWithWhereUniqueWithoutStc_statusInput = {
    where: a0_taskWhereUniqueInput
    update: XOR<a0_taskUpdateWithoutStc_statusInput, a0_taskUncheckedUpdateWithoutStc_statusInput>
    create: XOR<a0_taskCreateWithoutStc_statusInput, a0_taskUncheckedCreateWithoutStc_statusInput>
  }

  export type a0_taskUpdateWithWhereUniqueWithoutStc_statusInput = {
    where: a0_taskWhereUniqueInput
    data: XOR<a0_taskUpdateWithoutStc_statusInput, a0_taskUncheckedUpdateWithoutStc_statusInput>
  }

  export type a0_taskUpdateManyWithWhereWithoutStc_statusInput = {
    where: a0_taskScalarWhereInput
    data: XOR<a0_taskUpdateManyMutationInput, a0_taskUncheckedUpdateManyWithoutStc_statusInput>
  }

  export type a0_taskCreateWithoutZ_task_historyInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    created_date?: Date | string
    updated_date?: Date | string | null
    stc_category: stc_categoryCreateNestedOneWithoutA0_taskInput
    stc_priority: stc_priorityCreateNestedOneWithoutA0_taskInput
    stc_status: stc_statusCreateNestedOneWithoutA0_taskInput
    b1_comment?: b1_commentCreateNestedManyWithoutA0_taskInput
  }

  export type a0_taskUncheckedCreateWithoutZ_task_historyInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_priority: string
    task_category: string
    created_date?: Date | string
    updated_date?: Date | string | null
    b1_comment?: b1_commentUncheckedCreateNestedManyWithoutA0_taskInput
  }

  export type a0_taskCreateOrConnectWithoutZ_task_historyInput = {
    where: a0_taskWhereUniqueInput
    create: XOR<a0_taskCreateWithoutZ_task_historyInput, a0_taskUncheckedCreateWithoutZ_task_historyInput>
  }

  export type a0_taskUpsertWithoutZ_task_historyInput = {
    update: XOR<a0_taskUpdateWithoutZ_task_historyInput, a0_taskUncheckedUpdateWithoutZ_task_historyInput>
    create: XOR<a0_taskCreateWithoutZ_task_historyInput, a0_taskUncheckedCreateWithoutZ_task_historyInput>
    where?: a0_taskWhereInput
  }

  export type a0_taskUpdateToOneWithWhereWithoutZ_task_historyInput = {
    where?: a0_taskWhereInput
    data: XOR<a0_taskUpdateWithoutZ_task_historyInput, a0_taskUncheckedUpdateWithoutZ_task_historyInput>
  }

  export type a0_taskUpdateWithoutZ_task_historyInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stc_category?: stc_categoryUpdateOneRequiredWithoutA0_taskNestedInput
    stc_priority?: stc_priorityUpdateOneRequiredWithoutA0_taskNestedInput
    stc_status?: stc_statusUpdateOneRequiredWithoutA0_taskNestedInput
    b1_comment?: b1_commentUpdateManyWithoutA0_taskNestedInput
  }

  export type a0_taskUncheckedUpdateWithoutZ_task_historyInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    b1_comment?: b1_commentUncheckedUpdateManyWithoutA0_taskNestedInput
  }

  export type b1_commentCreateManyA0_taskInput = {
    comment_id?: bigint | number
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type z_task_historyCreateManyA0_taskInput = {
    history_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_priority: string
    task_category: string
    change_timestamp?: Date | string
    operation_type: string
  }

  export type b1_commentUpdateWithoutA0_taskInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type b1_commentUncheckedUpdateWithoutA0_taskInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type b1_commentUncheckedUpdateManyWithoutA0_taskInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type z_task_historyUpdateWithoutA0_taskInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    change_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    operation_type?: StringFieldUpdateOperationsInput | string
  }

  export type z_task_historyUncheckedUpdateWithoutA0_taskInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    change_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    operation_type?: StringFieldUpdateOperationsInput | string
  }

  export type z_task_historyUncheckedUpdateManyWithoutA0_taskInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    change_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    operation_type?: StringFieldUpdateOperationsInput | string
  }

  export type a0_taskCreateManyStc_categoryInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_priority: string
    created_date?: Date | string
    updated_date?: Date | string | null
  }

  export type a0_taskUpdateWithoutStc_categoryInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stc_priority?: stc_priorityUpdateOneRequiredWithoutA0_taskNestedInput
    stc_status?: stc_statusUpdateOneRequiredWithoutA0_taskNestedInput
    b1_comment?: b1_commentUpdateManyWithoutA0_taskNestedInput
    z_task_history?: z_task_historyUpdateManyWithoutA0_taskNestedInput
  }

  export type a0_taskUncheckedUpdateWithoutStc_categoryInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    b1_comment?: b1_commentUncheckedUpdateManyWithoutA0_taskNestedInput
    z_task_history?: z_task_historyUncheckedUpdateManyWithoutA0_taskNestedInput
  }

  export type a0_taskUncheckedUpdateManyWithoutStc_categoryInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_priority?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type a0_taskCreateManyStc_priorityInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_status: string
    task_category: string
    created_date?: Date | string
    updated_date?: Date | string | null
  }

  export type a0_taskUpdateWithoutStc_priorityInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stc_category?: stc_categoryUpdateOneRequiredWithoutA0_taskNestedInput
    stc_status?: stc_statusUpdateOneRequiredWithoutA0_taskNestedInput
    b1_comment?: b1_commentUpdateManyWithoutA0_taskNestedInput
    z_task_history?: z_task_historyUpdateManyWithoutA0_taskNestedInput
  }

  export type a0_taskUncheckedUpdateWithoutStc_priorityInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    b1_comment?: b1_commentUncheckedUpdateManyWithoutA0_taskNestedInput
    z_task_history?: z_task_historyUncheckedUpdateManyWithoutA0_taskNestedInput
  }

  export type a0_taskUncheckedUpdateManyWithoutStc_priorityInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type a0_taskCreateManyStc_statusInput = {
    task_id?: bigint | number
    task_title: string
    task_description: string
    task_date?: Date | string | null
    task_priority: string
    task_category: string
    created_date?: Date | string
    updated_date?: Date | string | null
  }

  export type a0_taskUpdateWithoutStc_statusInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stc_category?: stc_categoryUpdateOneRequiredWithoutA0_taskNestedInput
    stc_priority?: stc_priorityUpdateOneRequiredWithoutA0_taskNestedInput
    b1_comment?: b1_commentUpdateManyWithoutA0_taskNestedInput
    z_task_history?: z_task_historyUpdateManyWithoutA0_taskNestedInput
  }

  export type a0_taskUncheckedUpdateWithoutStc_statusInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    b1_comment?: b1_commentUncheckedUpdateManyWithoutA0_taskNestedInput
    z_task_history?: z_task_historyUncheckedUpdateManyWithoutA0_taskNestedInput
  }

  export type a0_taskUncheckedUpdateManyWithoutStc_statusInput = {
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    task_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_priority?: StringFieldUpdateOperationsInput | string
    task_category?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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