module Refinery
  module AddPages
    class Engine < Rails::Engine
      include Refinery::Engine
      isolate_namespace Refinery::AddPages

      engine_name :refinery_add_pages

      initializer "register refinerycms_add_pages plugin" do
        Refinery::Plugin.register do |plugin|
          plugin.name = "add_pages"
          plugin.url = proc { Refinery::Core::Engine.routes.url_helpers.add_pages_admin_add_pages_path }
          plugin.pathname = root
          plugin.activity = {
            :class_name => :'refinery/add_pages/add_page',
            :title => 'name'
          }
          
        end
      end

      config.after_initialize do
        Refinery.register_extension(Refinery::AddPages)
      end
    end
  end
end
