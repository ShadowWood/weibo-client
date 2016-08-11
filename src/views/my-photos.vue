<template>
	<div class="mdl-cell mdl-cell--12-col photo-board">
		<div class="mdl-card mdl-shadow--2dp mdl-grid">
			<mdl-tabs :selected.sync="selected">
				<!--照片墙-->
				<mdl-tab :tab="photoTab">
					<image-list :photos="photos"></image-list>
				</mdl-tab>
				<!--视频列表-->
				<mdl-tab :tab="videoTab">
					<p>视频</p>
				</mdl-tab>
				<!--相册-->
				<mdl-tab :tab="albumTab">
					<p>相册</p>
				</mdl-tab>
			</mdl-tabs>

		</div>
	</div>
</template>
<script>
	import ImageList from '../components/image-list'
	export default {
		'data': function () {
			return {
					'photos': [1, 2, 3, 4, 5, 6],
					'selected': 'photos-list',
					'photoTab': {title: '照片墙', id: 'photos-list'},
					'videoTab': {title: '视频', id: 'videos-list'},
					'albumTab': {title: '相册', id: 'album-list'}
			}
		},
		'components': {
				'image-list': ImageList,
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
</style>