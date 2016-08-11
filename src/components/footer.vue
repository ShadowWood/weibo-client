<template>
    <footer class="mdl-mini-footer">
        <div class="mdl-mini-footer__left-section">
            <div class="mdl-logo">Title</div>
            <ul class="mdl-mini-footer__link-list">
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy & Terms</a></li>
            </ul>
        </div>
    </footer>
</template>

<script>

    export default {
        'data': function () {
            return {}
        },

        'ready': function (){
            var appEl = document.getElementById('app');
            componentHandler.upgradeElement(appEl);
        }
    }
</script>

<style>

</style>