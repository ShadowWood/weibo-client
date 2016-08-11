<template>
    <div class="mdl-cell mdl-cell--12-col photo-board">
        <!--<div class="mdl-card mdl-shadow--2dp mdl-grid">
            <div v-for="photo in photos" class="demo-card-image mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
                <div class="mdl-card__title mdl-card--expand" id="photo-card">
                    <a herf="http://7xu027.com1.z0.glb.clouddn.com/build-Radius.jpg">
                        <img src="http://7xu027.com1.z0.glb.clouddn.com/build-Radius.jpg">
                    </a>
                </div>
                <div class="mdl-card__actions">
                    <span class="demo-card-image__filename">Image.jpg</span>
                </div>
            </div>
        </div>    -->
        <div class="cont mdl-card mdl-shadow--2dp mdl-grid">
            <lg-view :photos="photos"></lg-view>
        </div>
</template>
<script>
    import LgView from '../components/lg-view'

    export default {
        'data': function () {
            return {
                'photos': [1, 2, 3, 4, 5, 6]
            }
        },
        'components': {
            'lg-view': LgView
        }
    }
</script>
<style>
    .photo-board {
        padding: 8px;
    }

    .photo-board > .mdl-card {
        width: 100%;
        padding: 10px;
    }

    .demo-card-image.mdl-card {
        /*background: url('/static/img/photos/p1.jpg') center / cover;*/
    }
    .demo-card-image > .mdl-card__actions {
        height: 52px;
        padding: 16px;
        background: rgba(0, 0, 0, 0.2);
    }
    .demo-card-image__filename {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
    }
</style>