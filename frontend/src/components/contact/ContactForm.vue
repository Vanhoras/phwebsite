<template>
    <form class="contact-form" action="">
        <input class="text-input" placeholder="Name" type="text" name="name" required>
    
        <input class="text-input" placeholder="Enter email" type="text" name="email" required>

        <textarea placeholder="Your Message" type="text" name="message" required />
        
        <input class="submit-button" type="submit" value="SUBMIT">
    </form>
</template>


<script setup lang="ts">

</script>


<style scoped>

    .contact-form {
        max-width: 57rem;
        margin: auto;
        padding: 5rem 1rem;
        position: relative;
    }

    textarea:focus, .text-input:focus {
        outline: none;
    }

    .text-input, textarea {
        display: block;
        width: 100%;
        background-color: var(--grey-1);
        border: none;
        margin-bottom: 1rem;
        box-sizing: border-box;
        padding: 1rem 1.5rem;
        color: var(--text);
        font-size: 1.8rem;
    }

    textarea {
        height: 15rem;
    }

    .submit-button {
        display: block;
        padding: 1rem 3rem;
        color: var(--text);
        background-color: transparent;
        cursor: pointer;
        border: 0.2rem solid;
        font-size: 2.2rem;
        position: absolute;
        right: 1rem;
        transition: all 0.5s;
    }

    .submit-button:hover {
        background-color: var(--accent-1);
        color: var(--black);
        border-color: var(--accent-1);
    }

</style>
  
  