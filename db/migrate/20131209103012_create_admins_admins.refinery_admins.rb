# This migration comes from refinery_admins (originally 1)
class CreateAdminsAdmins < ActiveRecord::Migration

  def up
    create_table :refinery_admins do |t|
      t.string :name
      t.text :description
      t.integer :position

      t.timestamps
    end

  end

  def down
    if defined?(::Refinery::UserPlugin)
      ::Refinery::UserPlugin.destroy_all({:name => "refinerycms-admins"})
    end

    if defined?(::Refinery::Page)
      ::Refinery::Page.delete_all({:link_url => "/admins/admins"})
    end

    drop_table :refinery_admins

  end

end
