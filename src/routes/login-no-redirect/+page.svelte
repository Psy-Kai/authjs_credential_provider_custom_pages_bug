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
    <h1>
        Login without <a
            href="https://authjs.dev/reference/utilities/#using-the-redirect-false-option"
        >
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
    {#if signInResponse}
        <div>
            response is:<br />{JSON.stringify(signInResponse)}
        </div>
    {/if}
</main>
