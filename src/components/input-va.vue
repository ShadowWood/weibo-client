<template>
<div class="mdl-textfield mdl-js-textfield" v-bind:class='{"mdl-textfield--floating-label": floatingLabel, "mdl-textfield--expandable": expandable, "is-dirty": isDirty, "is-disabled": disabled}'>
  <slot v-if='expandable' name='expandable-button'>
    <label class="mdl-button mdl-js-button.mdl-button--icon" v-bind:for.once='id'>
      <i clss="material-icons">{{expandable}}</i>
    </label>  
  </slot>    
  <div v-bind:class='{"mdl-textfield__expandable-holder": expandable}'>
    <slot v-if='textarea' name='textarea'>
      <textarea class="mdl-textfield__input" type='text' v-model='value' v-bind:required='required' v-bind:id.once='id' v-bind:rows='rows' v-bind:maxlength='maxlength'></textarea>
    </slot>
    <slot v-else name='input'>
      <input class="mdl-textfield__input" v-bind:type='type' v-form-ctrl v-model='value' v-bind:id.once='id' v-bind:pattern='pattern' v-bind:disabled='disabled' v-bind:required='required' v-bind:readonly='readonly' v-bind:maxlength='maxlength'>
    </slot>
    <slot name='label'>
      <label class="mdl-textfield__label" v-bind:for.once='id'>{{label}}</label>
    </slot>
    <slot name='error'>
      <label class="mdl-textfield__error" v-if='error'>{{error}}</label>
    </slot>
  </div>   
</div>      
</template>

<script>
/* global componentHandler*/
import propFill from './mixins/prop-fill'


export default {
  props: {
    maxlength: {
      required: false
    },
    expandable: String,
    type: {
      type: String,
      default: 'text'
    },
    rows: {
      required: false
    },
    id: String,
    value: {
      required: false
    },
    disabled: {
      type: [Boolean, String],
      fill: true,
      required: false,
      default: false
    },
    required: {
      type: [Boolean, String],
      fill: true,
      required: false,
      default: false
    },
    readonly: {
      type: [Boolean, String],
      fill: true,
      required: false,
      default: false
    },
    label: String,
    pattern: String,
    error: String,
    textarea: {
      fill: true
    },
    floatingLabel: {
      required: false
    }
  },
  computed: {
    isDirty () {
      return '' + this.value
    }
  },
  ready () {
    componentHandler.upgradeElement(this.$el)
    if (this.floatingLabel && this.label == null) {
      this.label = this.floatingLabel
      this.$watch('floatingLabel', (val) => this.label = val)
    }
  },
  mixins: [propFill]
}
</script>

<style>

</style>