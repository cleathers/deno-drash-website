<script>
export const resource = {
  paths: ["/tutorials/misc/minimal-imports"],
  meta: {
    title: "Minimal Imports",
  }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code/tutorials/misc/minimal_imports'],
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      }
    };
  },
}
</script>

<template lang="pug">
page-tutorial(
  :toc="toc"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p Minimal imports means importing a minimal amount of Drash members to get your project started. For example, instead of importing the entire Drash framework to use a console logger, you can just import only the console logger. Same thing goes for the server, file logger, middleware base class, and others.
      p In this tutorial, we will go over importing the Drash server and the Drash console logger.
      p-view-source-code(:source_code_uri="$route.meta.source_code_uri")
  div.row
    div.col
      hr
      div-folder-structure-end-state(:code_block_data="example_code.folder_structure")
  div.row
    div.col
      hr
      h2-hash Steps
      ol
        li Create your server. Usually, you would use <code>import Drash from ...</code> and then create a <code>Drash.Http.Server</code> object. Instead of doing that to create a server, you will import only the server.
          code-block(:data="example_code.server")
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li Run your app.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | deno app.ts
          p You should see the following after you have run your app:
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | Hello from MyThing!
          p As you can see, <code>app.ts</code> knows nothing about <code>MyThing</code>. All it knows is that it should be registered as a global member and that it can use it without having to import it.
</template>
