<script lang="ts">
    import { signIn } from '@auth/sveltekit/client';

    const login = async () => {
        try {
            await signIn('credentials');
        } catch (e) {
            alert(e);
        }
    };

    let username: string;
    let password: string;
</script>

<main>
    <a href="/">Back</a>
    <h1>
        Login with <a href="https://authjs.dev/reference/utilities/#specifying-a-callbackurl">
            CallbackUrl
        </a>
    </h1>
    <form on:submit={login}>
        <div>Username</div>
        <input id="username" bind:value={username} />
        <div>Password</div>
        <input id="password" bind:value={password} />
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
    <h1>What happens</h1>
    When submitting credentials the link parameter changes to
    <code>/login?callbackUrl=...</code>
    <h1>Expectation</h1>
    When submitting credentials the link parameter should show
    <code>/login?error=CredentialsSign</code>.
</main>
