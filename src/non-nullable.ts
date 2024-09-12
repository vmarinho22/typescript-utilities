type Email = string | null | undefined;

type SafeEmail = NonNullable<Email>;

const email: SafeEmail = "foo@bar.com";

const email2: SafeEmail = null;
// error: Type 'null' is not assignable to type 'SafeEmail'.

export {};