module Refinery
  module Zeniths
    class Engine < Rails::Engine
      include Refinery::Engine
      isolate_namespace Refinery::Zeniths

      engine_name :refinery_zeniths

      initializer "register refinerycms_zeniths plugin" do
        Refinery::Plugin.register do |plugin|
          plugin.name = "zeniths"
          plugin.url = proc { Refinery::Core::Engine.routes.url_helpers.zeniths_admin_zeniths_path }
          plugin.pathname = root
          plugin.activity = {
            :class_name => :'refinery/zeniths/zenith',
            :title => 'name'
          }
          
        end
      end

      config.after_initialize do
        Refinery.register_extension(Refinery::Zeniths)
      end
    end
  end
end
