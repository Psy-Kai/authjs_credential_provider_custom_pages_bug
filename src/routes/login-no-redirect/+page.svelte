<script lang="ts">
    import { signIn } from '@auth/sveltekit/client';

    let signInResponse: any;
    const login = async () => {
        try {
            const response = await signIn('credentials', { redirect: false });
            signInResponse = await response?.json();
        } catch (e) {
            alert(e);
        }
    };
</script>

<main>
    <a href="/">Back</a>
    <h1>
        Login without
        <a href="https://authjs.dev/reference/utilities/#using-the-redirect-false-option">
            Redirect
        </a>
    </h1>
    <form on:submit={login}>
        <div>Username</div>
        <input />
        <div>Password</div>
        <input />
        <div>
            <button type="submit">Login</button>
        </div>
    </form>

    <h1>What happens</h1>
    When submitting credentials the responded json object just contains
    <code>
        {'{'}"url":"http://localhost:5173/auth/error?error=CredentialsSignin&provider=credentials"{'}'}}
    </code>.
    <h1>Expectation</h1>
    When submitting credentials the responded json object should look like
    <a href="https://authjs.dev/reference/utilities/#using-the-redirect-false-option">
        documented
    </a>.
    <h1>Submit credentials to display response json:</h1>
    {#if signInResponse}
        <div>
            {JSON.stringify(signInResponse)}
        </div>
    {/if}
</main>
