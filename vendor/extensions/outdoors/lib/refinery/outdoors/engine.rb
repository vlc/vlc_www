module Refinery
  module Outdoors
    class Engine < Rails::Engine
      include Refinery::Engine
      isolate_namespace Refinery::Outdoors

      engine_name :refinery_outdoors

      initializer "register refinerycms_outdoors plugin" do
        Refinery::Plugin.register do |plugin|
          plugin.name = "outdoors"
          plugin.url = proc { Refinery::Core::Engine.routes.url_helpers.outdoors_admin_outdoors_path }
          plugin.pathname = root
          plugin.activity = {
            :class_name => :'refinery/outdoors/outdoor',
            :title => 'name'
          }
          
        end
      end

      config.after_initialize do
        Refinery.register_extension(Refinery::Outdoors)
      end
    end
  end
end
