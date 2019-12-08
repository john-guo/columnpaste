// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { maxHeaderSize } from 'http';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.columnpaste', () => {
		// The code you place here will be executed every time your command is executed
		let editor = vscode.window.activeTextEditor;
		if (editor === undefined)
		{
			return;
		}

		let e = editor as vscode.TextEditor;
		let selection = e.selections;
		
		vscode.env.clipboard.readText().then(str => {
			let lines = str.match(/^.*((\r\n|\n|\r)|$)/gm);
			if (lines === null) {
				return;
			}

			lines.forEach((element, index) => {
				let sel = selection[0].start;
				if (index>=selection.length)
				{
					sel = selection[selection.length-1].start;
					sel = new vscode.Position(sel.line + index - selection.length + 1, sel.character);
				}
				else 
				{
					sel = selection[index].start;
				}
				if (sel.line < e.document.lineCount - 1) {
					element = element.trimRight();
				}
				e.insertSnippet(new vscode.SnippetString(element), sel, {undoStopAfter:false, undoStopBefore:false});
			});
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
