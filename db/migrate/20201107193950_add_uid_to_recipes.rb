class AddUidToRecipes < ActiveRecord::Migration[6.0]
  def change
    add_column :recipes, :uid, :integer
  end
end
