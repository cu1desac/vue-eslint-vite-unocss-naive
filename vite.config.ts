import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Unocss from 'unocss/vite';
import { presetAttributify, presetIcons, presetUno } from 'unocss';
import eslintPlugin from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vite Eslint工具
    eslintPlugin(),
    // Unocss
    Unocss({
      presets: [presetIcons(), presetAttributify(), presetUno()]
    }),
    // Naive自动载入
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ]
});
