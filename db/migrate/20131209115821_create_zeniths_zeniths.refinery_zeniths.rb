# This migration comes from refinery_zeniths (originally 1)
class CreateZenithsZeniths < ActiveRecord::Migration

  def up
    create_table :refinery_zeniths do |t|
      t.string :name
      t.text :description
      t.integer :position

      t.timestamps
    end

  end

  def down
    if defined?(::Refinery::UserPlugin)
      ::Refinery::UserPlugin.destroy_all({:name => "refinerycms-zeniths"})
    end

    if defined?(::Refinery::Page)
      ::Refinery::Page.delete_all({:link_url => "/zeniths/zeniths"})
    end

    drop_table :refinery_zeniths

  end

end
