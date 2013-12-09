# This migration comes from refinery_outdoors (originally 1)
class CreateOutdoorsOutdoors < ActiveRecord::Migration

  def up
    create_table :refinery_outdoors do |t|
      t.string :name
      t.text :description
      t.integer :position

      t.timestamps
    end

  end

  def down
    if defined?(::Refinery::UserPlugin)
      ::Refinery::UserPlugin.destroy_all({:name => "refinerycms-outdoors"})
    end

    if defined?(::Refinery::Page)
      ::Refinery::Page.delete_all({:link_url => "/outdoors/outdoors"})
    end

    drop_table :refinery_outdoors

  end

end
