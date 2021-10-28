<template>
    <span>
        当前版本：{{version}}
    </span>
</template>
<script>
import pak from '../../../package.json'
export default {
    data() {
        return {
            version:pak.version||'---'
        }
    },
}
</script>